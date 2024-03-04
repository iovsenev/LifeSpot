using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using System.IO;
using System.Text;

namespace LifeSpot
{
    public static class EndpointMapper
    {
        public static void MapCss(this IEndpointRouteBuilder builder)
        {
            var classFiles = new[] { "index.css", "about.css", "slider.css", "slider2.css" };
            foreach (var file in classFiles)
            {
                builder.MapGet($"/Static/CSS/{file}",
                    async context =>
                {
                    var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "CSS", file);
                    var css = await File.ReadAllTextAsync(cssPath);
                    await context.Response.WriteAsync(css);
                });
            }
        }

        public static async void MapJs(this IEndpointRouteBuilder builder)
        {
            var classFile = new[] { "index.js", "testing.js", "about.js", "slider.js" };
            foreach (var file in classFile)
            {
                builder.MapGet($"/Static/JS/{file}",
                    async context =>
                {
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "JS", file);
                    var js = await File.ReadAllTextAsync(jsPath);
                    await context.Response.WriteAsync(js);
                });

            }
        }

        public static void MapHtml(this IEndpointRouteBuilder builder)
        {
            string footerHtml = File.ReadAllText(
                Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "footer.html"));
            string sideBarHtml = File.ReadAllText(
                Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "sidebar.html"));
            string headerHtml = File.ReadAllText(
                Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "header.html"));
            string sliderHtml = File.ReadAllText(
                Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "slider.html"));

            builder.MapGet("/", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "index.html");
                var viewText = await File.ReadAllTextAsync(viewPath);

                // Загружаем шаблон страницы, вставляя в него элементы
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--HEADER-->", headerHtml)
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml);

                await context.Response.WriteAsync(html.ToString());
            });

            builder.MapGet("/testing", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "testing.html");

                // Загружаем шаблон страницы, вставляя в него элементы
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml);

                await context.Response.WriteAsync(html.ToString());
            });

            builder.MapGet("/about", async context =>
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "about.html");

                // Загружаем шаблон страницы, вставляя в него элементы
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml)
                    .Replace("<!--SLIDER-->", sliderHtml);

                await context.Response.WriteAsync(html.ToString());
            });
        }

        public static void MapImg(this IEndpointRouteBuilder builder)
        {
            var sliderDirectory = Path.Combine(Directory.GetCurrentDirectory(), "Static", "img", "slider");
            var dirInfo = new DirectoryInfo(sliderDirectory);
            var files = dirInfo.GetFiles();

            foreach (var file in files)
            {
                builder.MapGet($"/Static/img/slider/{file.Name}", async context =>
                {
                    var imgPath = file.FullName;
                    //var img = await File.ReadAllBytesAsync(imgPath);
                    await context.Response.Body.WriteAsync(await File.ReadAllBytesAsync(imgPath));
                });
            }
        }
    }
}
