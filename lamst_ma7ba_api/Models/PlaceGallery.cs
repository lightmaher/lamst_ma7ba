using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
    public class PlaceGallery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        [ForeignKey("place")]
        public int PlaceId { get; set; }
        public virtual Place Place { get; set; }

    }
}
