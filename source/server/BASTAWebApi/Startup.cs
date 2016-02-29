using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using Newtonsoft.Json.Serialization;
using Owin;

namespace BASTAWebApi
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //app.UseWelcomePage();

            var httpCOnfig = new HttpConfiguration();

            httpCOnfig.Routes.MapHttpRoute("DefaultApi",
                "api/{controller}/{action}");

            httpCOnfig.Formatters.Clear();

            var jsonFormatter = new JsonMediaTypeFormatter();
            jsonFormatter.SerializerSettings.ContractResolver = 
                new CamelCasePropertyNamesContractResolver();
            httpCOnfig.Formatters.Add(jsonFormatter);
            
            httpCOnfig.EnableCors(new EnableCorsAttribute("*", "*", "*"));

            app.UseWebApi(httpCOnfig);
        }
    }
}