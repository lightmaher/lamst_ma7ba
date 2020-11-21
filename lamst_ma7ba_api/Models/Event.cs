using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Needs { get; set; }
        public int Number { get; set; }
        [NotMapped]
        public IFormFile file { get; set; }
        public string url { get; set; }
        public DateTime Date { get; set; }
        [ForeignKey("Location")]
        public int PlaceId { get; set; }
        public virtual Place Location { get; set; }
        
    }
}
