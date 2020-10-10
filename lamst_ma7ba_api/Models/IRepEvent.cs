using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
  public interface IRepEvent
    {
        public  IList<Event> GetAllEvents();
        public Event GetEvent(int id);

        public void AddEvent(Event Event);

        public void DeleteEvent(int id);
        public void UpdateEvent(int id ,Event evt1);
        public Boolean isexist(int id);
    }
}
