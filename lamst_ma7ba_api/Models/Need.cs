using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
    public class Need
    {
        public int Id { get; set; }
        [Required]
        public string Month { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
