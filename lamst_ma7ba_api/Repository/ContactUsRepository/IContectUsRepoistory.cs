using lamst_ma7ba_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.ContactUsRepository
{
   public interface IContectUsRepoistory
    {
        public Task send_message(ContactUs message);
        public Task<IList<ContactUs>> get_messages();
        public Task<ContactUs> get_message(int id);
        public Task delete_message( int id);
     }
}
