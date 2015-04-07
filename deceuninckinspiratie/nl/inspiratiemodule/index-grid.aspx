<%@ Page Title="Ramen en deuren in duurzaam PVC - Deceuninck NV" Language="C#" MasterPageFile="~/masterpages/nl/PPSite.Master" AutoEventWireup="true" CodeFile="index-grid.aspx.cs" Inherits="index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">  
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="robots" content="noodp" />
    <meta name="robots" content="noydir" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="description" content="Ramen en Deuren waren nog nooit zo Duurzaam, Onderhoudsarm, Ecologisch & Super-Isolerend als met de PVC-oplossingen van Deceuninck." />
    <meta name="keywords" content="Ramen, Deuren, PVC" />
    <link href="/Content/inspiratiemodule/Styles/inspiratiemodule-grid.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section id="inspiratiemodule" class="block left-xlarge">
        <h1 class="inspiratie-title">Inspiratie voor uw woning</h1>
          <div id="filters" class="filters"></div>   
          <div id="projects" class="projects"></div>      
    </section>
    <script src="/Scripts/jquery.easing.1.3.js"></script>
    <script src="/Scripts/jquery-placeholder-2.0.7.min.js"></script>
    <script src="/Scripts/modernizr-2.8.3.js"></script>
    <script src="/Scripts/PP/PP.js"></script>
    <script src="/Scripts/PP/WebPart/PP.WebPart.DropdownList.js"></script>
    <script src="/Scripts/PP/WebPart/PP.WebPart.Slider.js"></script>
    <script src="/Scripts/PP/Page/PP.Page.Home.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places&language=NL"></script>
    <script src="/Scripts/inspiratiemodule/inspiratiemodule-grid.js"></script>
    <script src="/Scripts/inspiratiemodule/isotope.pkgd.min.js"></script>
    <script src="/Scripts/inspiratiemodule/filter.js"></script>
</asp:Content>
