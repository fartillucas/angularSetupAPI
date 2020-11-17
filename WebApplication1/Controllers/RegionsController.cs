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
    public class RegionsController : ApiController
    {
        public HttpResponseMessage GetRegions()
        {
            string query = @"SELECT Date, MIN(Regions.Subscriptions) AS Subscriptions, MIN(Regions.Stations) as Stations, ForecastDay, AVG(TempMean) as TempMean, AVG(Humidity) as Humidity, AVG(Pressure) as Pressure, MIN(TempMin) as TempMin, MAX(TempMax) as TempMax, Subscriptions.RegionId, Max(Regions.Name) as Name FROM ForecastsFromArima JOIN(SELECT RegionId, StationId From Subscriptions) as Subscriptions on Subscriptions.StationId = ForecastsFromArima.StationId JOIN(SELECT Name, Stations, Subscriptions, Id From Regions) as Regions on Regions.Id = Subscriptions.RegionId where Date = (select MAX(Date) from ForecastsFromArima) Group by Subscriptions.RegionId, Date, ForecastDay Order by Subscriptions.RegionId, ForecastDay";
            DataTable table1 = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Akcentralen"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table1);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table1);
        }
    }
}
