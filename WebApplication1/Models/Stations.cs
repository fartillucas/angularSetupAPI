using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Stations
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longtitude { get; set; }
        public int RegionId { get; set; }
        public DateTime Date { get; set; }
        public string StationId { get; set; }
        public decimal TempMean { get; set; }
        public int Humidity { get; set; }
        public decimal Pressure { get; set; }
        public decimal TempMin { get; set; }
        public decimal TempMax { get; set; }
    }
}