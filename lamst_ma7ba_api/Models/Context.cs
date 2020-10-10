using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> option) :
            base(option)
        {
        }
        public DbSet<Event> Events { get; set; }

       
    }
    }
