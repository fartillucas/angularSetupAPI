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
            string query = @"select Name from Regions";
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
