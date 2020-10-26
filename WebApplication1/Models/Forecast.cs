using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Forecast
    {
        public DateTime Date { get; set; }
        public string StationId { get; set; }
        public decimal TempMean { get; set; }
        public int Humidity { get; set; }
        public decimal Pressure { get; set; }
        public decimal TempMin { get; set; }
        public decimal TempMax { get; set; }



    }
}