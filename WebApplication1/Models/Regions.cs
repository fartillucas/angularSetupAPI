using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Regions
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longtitude { get; set; }
        public int Stations { get; set; }
        public int Subscriptions { get; set; }
        public int AlarmItems { get; set; }
        public decimal Factor { get; set; }
    }
}