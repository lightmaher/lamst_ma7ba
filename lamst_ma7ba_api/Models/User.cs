using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string SecoundName { get; set; }
        public string Email { get; set; }
        public string Job { get; set; }
        public long PhoneNumber { get; set; }
        [NotMapped]
        public IFormFile file { get; set; }
        public string url { get; set; }
        public string address { get; set; }
        public string Reason { get; set; }
        public string Comment { get; set; }
    }
}
