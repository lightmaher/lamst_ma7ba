using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
  public interface IRepEvent
    {
        public Task<IList<Event>> getHomeEvents();

        public Task< IList<Event>> GetAllEvents(int pn);
        public Task<Event> GetEvent(int id);

        public Task AddEvent(Event Event);
        public Task<int> count_events();


        public Task DeleteEvent(int id);
        public Task UpdateEvent(int id ,Event evt1);
        public Boolean isexist(int id);
        public Task joinEvent(Join join);
        public Task joinDelete(int id);

    }
}
