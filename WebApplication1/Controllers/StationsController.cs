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
    public class StationsController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetStations()
        {
            string query = @"SELECT Date, StationId, TempMean, Pressure, Humidity, TempMin, TempMax, ForecastDay,Name, Id, RegionId FROM ForecastsFromArima JOIN (SELECT Name, Id, RegionId FROM Stations) as Stations on Stations.Id = ForecastsFromArima.StationId Order by Stations.RegionId";
            DataTable tableStations = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Akcentralen"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(tableStations);
            }
            return Request.CreateResponse(HttpStatusCode.OK, tableStations);
        }

       
    }
}
