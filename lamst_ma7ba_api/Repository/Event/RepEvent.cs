using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public async Task<IList<Event>> getHomeEvents()
        {

            var resualt = await _context.Events.Include(c => c.Location).Take(3).OrderByDescending(x => x.AddetTime).ToListAsync();
            return resualt;
        }

        public async Task AddEvent(Event Event)
        {
            var place = _context.places.FirstOrDefault(x => x.PlaceId == Event.PlaceId);
         var time = Convert.ToDateTime(Event.Date);
            Event event1 = new Event()
            {
                Title = Event.Title,
                Description = Event.Description,
                Date = Event.Date,
                Number = Event.Number,
                Needs = Event.Needs,
               url=Event.url,
               PlaceId=Event.PlaceId,
               Location=place,
               AddetTime = time
            };
            await _context.Events.AddAsync(event1);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteEvent(int id)
        {
            var evt = await _context.Events.FirstOrDefaultAsync(X => X.Id == id);
             _context.Events.Remove(evt);
           await _context.SaveChangesAsync();
        }

        public async Task<IList<Event>> GetAllEvents(int pn)
        {
            var eves = await _context.Events.Include(c => c.Location).Include(x => x.Joins).OrderByDescending(x => x.AddetTime).paginage(pn,4).ToListAsync();
            return eves;
        }
        public async Task<IList<Event>> getEvents(int pn)
        {
            var eves = await _context.Events.Include(c => c.Location).Include(x => x.Joins).OrderByDescending(x => x.AddetTime).paginage(pn, 4).ToListAsync();
            return eves;
        }

        public async Task<Event> GetEvent(int id)
        {
            Event evt = await _context.Events.Include(x => x.Joins).FirstOrDefaultAsync(c => c.Id == id);
 
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

        public async Task joinDelete(int id)
        {
            
                Join join = await _context.Joins.FirstOrDefaultAsync(x=>x.Id == id);
                 _context.Joins.Remove(join);
               await _context.SaveChangesAsync();
            

        }

        public async Task joinEvent(Join join)
        {
            Event evt = _context.Events.FirstOrDefault(x=>x.Id == join.EventId);
            Join join1 = new Join() { Id = join.Id, EventId = join.EventId, Name = join.Name, PhoneNumber = join.PhoneNumber, Event=evt};
            await _context.Joins.AddAsync(join1);
            await _context.SaveChangesAsync();
        }


        public async Task UpdateEvent( int id , Event evt)
        {
            Event evt1 = await _context.Events.FindAsync(id);
            Event ev2 = new Event()
            {
                Id = evt1.Id,
                Title = evt.Title,
                Description = evt.Description,
                Location = evt.Location,
                Date = DateTime.Now.ToString()
            };
             _context.Remove(evt1);
           await _context.AddAsync(ev2);
            await _context.SaveChangesAsync();
        }

        public async Task<int> count_events()
        {
            int count = await _context.Events.CountAsync();
            return count;
        }
    }
}
