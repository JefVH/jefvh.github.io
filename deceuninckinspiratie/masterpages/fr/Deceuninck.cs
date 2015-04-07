using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;

public partial class Main : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {

        //Set default language buttons
        language_nl.NavigateUrl = "http://" + Request.Url.Authority + "/nl";
        language_fr.NavigateUrl = Request.Url.ToString();

        //Check URL for language buttons
        string path = Request.Url.LocalPath;
        var xmlData = XDocument.Load(Server.MapPath("~/language-mapping.xml"));
        var page = xmlData.Descendants("page").Where(p => p.Descendants("fr").First().Value.Equals(path)).FirstOrDefault();
        if (page == null && path.EndsWith("/index.aspx"))
        {
            path = path.Replace("index.aspx", "");
            page = xmlData.Descendants("page").Where(p => p.Descendants("fr").First().Value.Equals(path)).FirstOrDefault();
        }
        if (page != null)
        {
            var result = page.Descendants("nl").FirstOrDefault();
            if (result != null && !String.IsNullOrEmpty(result.Value))
            {
                language_nl.NavigateUrl = result.Value + Request.Url.Query;
            }
        }
    }
}