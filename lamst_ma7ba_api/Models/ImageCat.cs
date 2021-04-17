using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
    public class ImageCat
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public IList<Image> images { get; set; }

    }
}
