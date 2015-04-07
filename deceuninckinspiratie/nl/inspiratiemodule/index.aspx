<%@ Page Title="Ramen en deuren in duurzaam PVC - Deceuninck NV" Language="C#" MasterPageFile="~/masterpages/nl/PPSite.Master" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">  
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="robots" content="noodp" />
    <meta name="robots" content="noydir" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="description" content="Ramen en Deuren waren nog nooit zo Duurzaam, Onderhoudsarm, Ecologisch & Super-Isolerend als met de PVC-oplossingen van Deceuninck." />
    <meta name="keywords" content="Ramen, Deuren, PVC" />
    <link href="/Content/inspiratiemodule/Styles/inspiratiemodule.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section id="inspiratiemodule" class="block left-xlarge">
        <h1 class="inspiratie-title">Inspiratie voor uw woning</h1>
          <div class="filters">
                <select id="country-list" name="Country"">
                    <option value="all">Alles</option>
                    <option value="belgium">België</option>
                </select>
                <select id="projecttype-list" name="Projecttype">
                    <option value="all">Alles</option>
                    <option value="newbuild">Nieuwbouw</option>
                    <option value="renovation">Renovatie</option>
                </select>
                <select id="buildingstyle-list" name="BuildingStyle">
                    <option value="all">Alles</option>
                    <option value="pastorie">Pastorie</option>
                    <option value="farmhouse">Hoeve</option>
                    <option value="modern">Modern</option>
                    <option value="contemporary">Hedendaags</option>
                    <option value="classic">Klassiek</option>
                    <option value="castlefarm">Kasteelhoeve</option>
                    <option value="semidetachedtuin">Halfopen bebouwing</option>
                    <option value="gardencanopy">Tuinpaviljoen</option>
                </select>
                <select id="product-list" name="Productlist">
                    <option value="all">Alles</option>
                    <option value="windowsdoors">Ramen & Deuren</option>
                    <option value="facade">Gevel</option>
                    <option value="fencing">Tuinomheining</option>
                    <option value="terrace">Terras</option>
                    <option value="interior">Interieur</option>
                </select>
          </div>   
          <div id="projects" name="projects">

          </div>  
        

        <%--<nav class="filters">
            <ul id="filter">
                <li>Land
                    <ul>
                        <li>België</li>
                    </ul>
                </li>
                <li>Projecttype
                    <ul>
                        <li>Nieuwbouw</li>
                        <li>Renovatie</li>
                    </ul>
                </li>
                <li>Woonstijl
                    <ul>
                        <li>Pastorie</li>
                        <li>Hoeve</li>
                        <li>Modern</li>
                        <li>Hedendaags</li>
                        <li>Klassiek</li>
                        <li>Kasteelhoeve</li>
                        <li>Halfopen bebouwing</li>
                        <li>Tuinpaviljoen</li>
                    </ul>
                </li>
                <li>Product
                    <ul>
                        <li>Ramen</li>
                        <li>Deuren</li>
                        <li>Gevel</li>
                        <li>Tuinomheining</li>
                        <li>Terras</li>
                        <li>Interieur</li>
                    </ul>
                </li>
            </ul>
        </nav>--%>

        <%--<article class="belgium nieuwbouw pastorie ramendeuren" data-categories="">
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/ramen-deuren.aspx" class="ramen" title="Project Lochristi">
                <figure>
                    <img src="/Content/PP/Images/Projects/Lochristi1.png" class="image" alt="Project Lochristi" />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />bekijk project
                        </span>
                    </figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Project</h1>
                        <h2>Nieuwbouw/Lochristi</h2>
                        <h1>Bouwstijl</h1>
                        <h2>Pastoriewoning</h2>
                        <h1>Raamprofiel</h1>
                        <h2>Coating Decoroc<br />Balmoral (REF.6909) RAL &#177; D 085 60 10</h2>
                    </header>
                </div>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/tuintoepassingen/twinson-terras.aspx" class="terras" title="Met een Twinson terras geniet u pas écht van het buitenleven">
                <figure>
                    <img src="/Content/PP/Images/Projects/Gavere1.png" class="image" alt="Twinson terras" title="Met een Twinson terras geniet u pas écht van het buitenleven" />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Project</h1>
                        <h2>Nieuwbouw/Gavere</h2>
                        <h1>Bouwstijl</h1>
                        <h2>Pastoriewoning</h2>
                        <h1>Raamprofiel</h1>
                        <h2>Autentica<br />Coating Decoroc<br />Balmoral (REF.6909) RAL &#177; D 085 60 10</h2>
                    </header>
                </div>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/gevelbekleding.aspx" class="gevelbekleding" title="Gevelbekleding: een instant meerwaarde">
                <div class="body txt">
                    <header>
                        <h1>Project</h1>
                        <h2>Nieuwbouw/Booischot</h2>
                        <h1>Bouwstijl</h1>
                        <h2>Klassieke stijl</h2>
                        <h1>Raamprofiel</h1>
                        <h2>Folie bekleefd<br />Crème wit (REF.1096) RAL &#177; 9001</h2>
                    </header>
                </div>
                <figure>
                    <img src="/Content/PP/Images/Projects/Booischot1.png" class="image" alt="Twinson gevelbekleding" title="Gevelbekleding: een instant meerwaarde" />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/ramen-deuren/pvc-schuifdeuren.aspx" class="schuifdeuren" title="PVC schuifdeuren: elegant comfort">
                <div class="body txt">
                    <header>
                        <h1>Project</h1>
                        <h2>Nieuwbouw/Lochristi</h2>
                        <h1>Bouwstijl</h1>
                        <h2>Pastoriewoning</h2>
                        <h1>Raamprofiel</h1>
                        <h2>Coating Decoroc<br />Balmoral (REF.6909) RAL &#177; D 085 60 10</h2>
                    </header>
                </div>
                <figure>
                    <img src="/Content/PP/Images/Projects/Lochristi1.png" class="image" alt="PVC schuifdeuren" title="PVC schuifdeuren: elegant comfort" />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/ramen-deuren/deuren.aspx" class="deuren" title="De PVC deuren van Deceuninck hebben álles wat u verlangt: flair, robuustheid én topisolatie.">
                <figure>
                    <img src="/Content/PP/Images/Projects/Lochristi1.png" class="image" alt="PVC deuren" title="De PVC deuren van Deceuninck hebben álles wat u verlangt: flair, robuustheid én topisolatie." />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Project</h1>
                        <h2>Nieuwbouw/Lochristi</h2>
                        <h1>Bouwstijl</h1>
                        <h2>Pastoriewoning</h2>
                        <h1>Raamprofiel</h1>
                        <h2>Coating Decoroc<br />Balmoral (REF.6909) RAL &#177; D 085 60 10</h2>
                    </header>
                </div>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/tuintoepassingen/tuinafsluitingen.aspx" class="tuinafsluiting" title="Tuinafsluiting die net dat tikkeltje meer biedt? Daarvoor moet u bij Deceuninck zijn.">
                <figure>
                    <img src="/Content/PP/Images/Projects/Lochristi1.png" class="image" alt="tuinafsluiting" title="Tuinafsluiting die net dat tikkeltje meer biedt? Daarvoor moet u bij Deceuninck zijn." />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Project</h1>
                        <h2>Nieuwbouw/Lochristi</h2>
                        <h1>Bouwstijl</h1>
                        <h2>Pastoriewoning</h2>
                        <h1>Raamprofiel</h1>
                        <h2>Coating Decoroc<br />Balmoral (REF.6909) RAL &#177; D 085 60 10</h2>
                    </header>
                </div>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/dakranden-dakoversteken.aspx" class="dakoversteken" title="Ook uw dak verdient een perfecte afwerking.  PVC dakrandoversteken brengen soelaas.">
                <div class="body txt">
                    <header>
                        <h1>Dakoversteken</h1>
                        <h2>Een dakoversteek in PVC of Twinson beschermt uw nieuwe of gerenoveerde woning op een onderhoudsarme manier.</h2>
                    </header>
                   <header>
                        <h1>Project</h1>
                        <h2>Nieuwbouw/Lochristi</h2>
                        <h1>Bouwstijl</h1>
                        <h2>Pastoriewoning</h2>
                        <h1>Raamprofiel</h1>
                        <h2>Coating Decoroc<br />Balmoral (REF.6909) RAL &#177; D 085 60 10</h2>
                    </header>
                </div>
                <figure>
                    <img src="/Content/PP/Images/Projects/Lochristi1.png" class="image" alt="PVC dakrandoversteken" title="Ook uw dak verdient een perfecte afwerking.  PVC dakrandoversteken brengen soelaas." />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/luiken.aspx" class="luiken" title="Deceuninck luiken tillen uw gevel naar een hoger niveau.">
                <div class="body txt">
                    <header>
                        <h1>Luiken</h1>
                        <h2>Onze luiken worden volledig op maat gemaakt. Met hun elegante en verfijnde design sluiten ze naadloos aan bij uw ramen en deuren.</h2>
                    </header>
                   <header>
                        <h1>Project</h1>
                        <h2>Nieuwbouw/Lochristi</h2>
                        <h1>Bouwstijl</h1>
                        <h2>Pastoriewoning</h2>
                        <h1>Raamprofiel</h1>
                        <h2>Coating Decoroc<br />Balmoral (REF.6909) RAL &#177; D 085 60 10</h2>
                    </header>
                </div>
                <figure>
                    <img src="/Content/PP/Images/Projects/Lochristi1.png" class="image" alt="Deceuninck luiken." title="Deceuninck luiken tillen uw gevel naar een hoger niveau." />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/pvc-rolluiken.aspx" class="rolluiken" title="Deceuninck rolluiken zijn hét visitekaartje van uw gevel.">
                <figure>
                    <img src="/Content/PP/Images/Projects/Lochristi1.png" class="image" alt="Deceuninck rolluiken" title="Deceuninck rolluiken zijn hét visitekaartje van uw gevel." />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Rolluiken</h1>
                        <h2>De Deceuninck rolluiken bieden een goede thermische en akoestische isolatie. Bovendien passen ze op alle mogelijke ramen.</h2>
                    </header>
                    <header>
                        <h1>Project</h1>
                        <h2>Nieuwbouw/Lochristi</h2>
                        <h1>Bouwstijl</h1>
                        <h2>Pastoriewoning</h2>
                        <h1>Raamprofiel</h1>
                        <h2>Coating Decoroc<br />Balmoral (REF.6909) RAL &#177; D 085 60 10</h2>
                    </header>
                </div>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/interieurtoepassingen.aspx" class="interieurtoepassingen" title="Met ons breed gamma aan interieurtoepassingen creëert u een heel eigen universum.">
                <figure>
                    <img src="/Content/PP/Images/Projects/Lochristi1.png" class="image" alt="interieurtoepassingen" title="Met ons breed gamma aan interieurtoepassingen creëert u een heel eigen universum." />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Project</h1>
                        <h2>Nieuwbouw/Lochristi</h2>
                        <h1>Bouwstijl</h1>
                        <h2>Pastoriewoning</h2>
                        <h1>Raamprofiel</h1>
                        <h2>Coating Decoroc<br />Balmoral (REF.6909) RAL &#177; D 085 60 10</h2>
                    </header>
                </div>
            </a>
        </article>--%>
    </section>
    <script src="/Scripts/jquery.easing.1.3.js"></script>
    <script src="/Scripts/jquery-placeholder-2.0.7.min.js"></script>
    <script src="/Scripts/modernizr-2.8.3.js"></script>
    <script src="/Scripts/PP/PP.js"></script>
    <script src="/Scripts/PP/WebPart/PP.WebPart.DropdownList.js"></script>
    <script src="/Scripts/PP/WebPart/PP.WebPart.Slider.js"></script>
    <script src="/Scripts/PP/Page/PP.Page.Home.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places&language=NL"></script>
    <script src="/Scripts/inspiratiemodule/inspiratiemodule.js"></script>
    <script src="/Scripts/inspiratiemodule/filter.js"></script>
    <script src="/Scripts/inspiratiemodule/isotope.pkgd.min.js"></script>
</asp:Content>
