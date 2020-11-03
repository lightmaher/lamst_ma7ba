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

        public async Task AddEvent(Event Event)
        {
            await _context.Events.AddAsync(Event);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteEvent(int id)
        {
            var evt = await _context.Events.FirstOrDefaultAsync(X => X.Id == id);
             _context.Events.Remove(evt);
           await _context.SaveChangesAsync();
        }

        public async Task<IList<Event>> GetAllEvents()
        {
            var eves = await _context.Events.ToListAsync();
            return eves;
        }

        public async Task<Event> GetEvent(int id)
        {
            var evt = await _context.Events.FirstOrDefaultAsync(x => x.Id == id);
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

        public async Task UpdateEvent( int id , Event evt)
        {
            Event evt1 = await _context.Events.FindAsync(id);
            Event ev2 = new Event()
            {
                Id = evt1.Id,
                Title = evt.Title,
                Description = evt.Description,
                Location = evt.Location,
                Date = DateTime.Now
            };
             _context.Remove(evt1);
           await _context.AddAsync(ev2);
            await _context.SaveChangesAsync();
        }

    }
}
