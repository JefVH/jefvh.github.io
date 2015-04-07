<%@ Application Language="C#" %>

<script runat="server">
    
    protected void Application_BeginRequest(object sender, EventArgs e)
    {
        if (HttpContext.Current.Request.Url.ToString().ToLower().Contains(

    "http://deceuninck.fr"))
        {

            HttpContext.Current.Response.Status =

                "301 Moved Permanently";

            HttpContext.Current.Response.AddHeader("Location",

                Request.Url.ToString().ToLower().Replace(

                    "http://deceuninck.fr",

                    "http://www.deceuninck.fr"));

        }
    }

    void Application_Start(object sender, EventArgs e) 
    {
        //System.Web.Routing.RouteTable.Routes.MapPageRoute("jobs", "jobs", "~/en/jobs.aspx");
    }
    
    void Application_End(object sender, EventArgs e) 
    {
        //  Code that runs on application shutdown

    }
        
    void Application_Error(object sender, EventArgs e) 
    { 
        // Code that runs when an unhandled error occurs

    }

    void Session_Start(object sender, EventArgs e) 
    {
        // Code that runs when a new session is started

    }

    void Session_End(object sender, EventArgs e) 
    {
        // Code that runs when a session ends. 
        // Note: The Session_End event is raised only when the sessionstate mode
        // is set to InProc in the Web.config file. If session mode is set to StateServer 
        // or SQLServer, the event is not raised.

    }


</script>
