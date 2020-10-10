using Microsoft.AspNetCore.Mvc;
using SQLitePCL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
    public class RepEvent : IRepEvent
        
    {
        private readonly Context _context;

        public RepEvent(Context context)
        {
            _context = context;
        }

        public void AddEvent(Event Event)
        {
            _context.Events.Add(Event);
            _context.SaveChanges();
           
        }

        public void DeleteEvent(int id)
        {
            var evt = _context.Events.FirstOrDefault(X => X.Id == id);
            _context.Events.Remove(evt);
            _context.SaveChanges();
        }

        public IList<Event> GetAllEvents()
        {
            var eves = _context.Events.ToList();

            return eves;
        }

        public Event GetEvent(int id)
        {
            var evt = _context.Events.FirstOrDefault(x => x.Id == id);
            return evt;
        }

        public bool isexist(int id)
        {
            if (id != 0)
            {
                var evt = _context.Events.Find(id);
                if (evt != null)
                {
                    return true;
                }
                return false;
            } return false;
        } 

        public void UpdateEvent( int id , Event evt)
        {
            Event evt1 = _context.Events.Find(id);
            Event ev2 = new Event()
            {
                Id = evt1.Id,
                Title = evt.Title,
                Description = evt.Description,
                Location = evt.Location,
                Date = DateTime.Now


            };
            _context.Remove(evt1);
            _context.Add(ev2);
            _context.SaveChanges();
        }

    }
}
