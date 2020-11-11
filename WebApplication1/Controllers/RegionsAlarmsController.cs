using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class RegionsAlarmsController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetStationsAlarms()
        {
            string query = @"SELECT SUM(ALARMS) as Alarms, Date, Region.RegionId, RegionName.Name FROm AlarmPressureByStation JOIN (SELECT DISTINCT RegionID, StationId FROM Subscriptions) as Region on Region.StationId = AlarmPressureByStation.StationId  JOIN (SELECT Name, Id From Regions) as RegionName on RegionName.Id = Region.RegionId Group by Region.RegionId, Date, RegionName.Name Order by Region.RegionId, Date";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Akcentralen"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
    }
}
