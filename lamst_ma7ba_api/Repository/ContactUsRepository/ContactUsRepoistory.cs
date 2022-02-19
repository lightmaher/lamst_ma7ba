using lamst_ma7ba_Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.ContactUsRepository
{
    public class ContactUsRepoistory : IContectUsRepoistory
    {
        private readonly Context _context;

        public ContactUsRepoistory( Context context)
        {
            _context = context;
        }
        public async Task delete_message(int id)
        {
            var message = await _context.messages.FirstOrDefaultAsync(x => x.Id == id);
            if (message != null)
            {
                _context.messages.Remove(message);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<ContactUs> get_message(int id)
        {
            var message = await _context.messages.FirstOrDefaultAsync(x => x.Id == id);
            return message;
        }

        public async Task<IList<ContactUs>> get_messages()
        {
            var messages = await _context.messages.ToListAsync();
            return messages;
        }

        public async Task send_message(ContactUs message)
        {
           await _context.messages.AddAsync(message);
           await _context.SaveChangesAsync();
        }
    }
}
