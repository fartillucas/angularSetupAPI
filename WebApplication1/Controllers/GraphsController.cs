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
    public class GraphsController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetGraphDataSecondary()
        {
            string query = @"select MAX(Date) AS Date, ForecastDay,  AVG(TempMean) as TEMPMEAN , AVG(Humidity) AS HUMIDITY, AVG(Pressure) AS PRESSURE, AVG(TempMin) AS TEMPMIN, AVG(TempMax) AS TEMPMAX from ForecastsFromArima where Date = (select MAX(Date) from ForecastsFromArima)group by ForecastDay";
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