using lamst_ma7ba_Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Repository.ImageCatRepository
{
    public class ImageCatRepo : IImageCatRepo
    {
        private readonly Context context;

        public ImageCatRepo(Context context)
        {
            this.context = context;
        }

        public async Task addimagecat(ImageCat imageCat)
        {
            var imagecat1 = new ImageCat() { Title = imageCat.Title , Url = imageCat.Url};
          await context.imageCats.AddAsync(imagecat1);
          await  context.SaveChangesAsync();
        }

        public async Task DeleteImagecat(int id)
        {
            var imagecat = await context.imageCats.FirstOrDefaultAsync(x => x.Id == id);
            context.imageCats.Remove(imagecat);
            await context.SaveChangesAsync();
            
        }

        public async Task<ImageCat> showimagecat(int id)
        {
            var imagecat = await context.imageCats.FirstOrDefaultAsync(x => x.Id == id);
            return imagecat;
        }

        public async Task<IList<ImageCat>> showImagesCat()
        {
            var showImagesCat = await context.imageCats.Include(x => x.images).ToListAsync();
            return showImagesCat;
        }

        public Task<ImageCat> updateimagecat(int id)
        {
            throw new NotImplementedException();
        }
    }
}
