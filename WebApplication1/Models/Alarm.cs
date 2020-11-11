using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Web;

namespace WebApplication1.Models
{
    public class Alarms
    {
        public DateTime Date { get; set; }
        public string StationId { get; set; }
        public int Alarm { get; set; }
        public string RegionId { get; set; }

    }
}