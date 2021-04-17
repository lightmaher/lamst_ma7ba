using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string  Url { get; set; }
        public string DateString { get; set; }

        public DateTime Date { get; set; }
        [ForeignKey("ImageCat")]
        public int ImageCatId { get; set; }
        public virtual ImageCat ImageCat{ get; set; }

    }
}
