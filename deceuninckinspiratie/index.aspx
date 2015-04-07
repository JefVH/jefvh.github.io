<%@ Page Title="Ramen en deuren in duurzaam PVC - Deceuninck NV" Language="C#" MasterPageFile="~/masterpages/nl/PPSite.Master" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">  
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="robots" content="noodp" />
    <meta name="robots" content="noydir" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="description" content="Ramen en Deuren waren nog nooit zo Duurzaam, Onderhoudsarm, Ecologisch & Super-Isolerend als met de PVC-oplossingen van Deceuninck." />
    <meta name="keywords" content="Ramen, Deuren, PVC" />
    <script src="/Scripts/jquery.easing.1.3.js"></script>
    <script src="/Scripts/jquery-placeholder-2.0.7.min.js"></script>
    <script src="/Scripts/modernizr-2.8.3.js"></script>
    <script src="/Scripts/PP/PP.js"></script>
    <script src="/Scripts/PP/WebPart/PP.WebPart.DropdownList.js"></script>
    <script src="/Scripts/PP/WebPart/PP.WebPart.Slider.js"></script>
    <script src="/Scripts/PP/Page/PP.Page.Home.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places&language=NL"></script>
 
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section id="render" class="block left-xlarge">
        <div class="house">
            <div class="pointer" data-left="560" data-top="460" data-id="2">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Luiken');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay right">
                    <div class="body txt luiken">
                        <h2>Luiken</h2>
                        <p><strong>De luiken van Deceuninck zijn niet alleen elegant en authentiek, ze bieden ook alle voordelen van kunststof. En dat zijn er heel wat.</strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                                Stevig</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                                Onderhoudsarm</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                                Bescherming tegen zon, koude, wind en regen</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/luiken.jpg" alt="Deceuninck luiken" title="Deceuninck luiken tillen uw gevel naar een hoger niveau." width="189" />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/luiken.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="pointer" data-left="445" data-top="510" data-id="3">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Deuren');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay right">
                    <div class="body txt deuren">
                        <h2>Deuren</h2>
                        <p><strong>De (schuif)deuren van Deceuninck hebben alles wat uw hartje verlangt: klasse, comfort en een energiezuinigheid om u tegen te zeggen. </strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                                Hoogisolerend</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                                Onderhoudsvriendelijk</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                                Stevig</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/deuren.jpg" alt="PVC deuren" title="De PVC deuren van Deceuninck hebben álles wat u verlangt: flair, robuustheid én topisolatie." width="189" />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/ramen-deuren/deuren.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="pointer" data-left="940" data-top="230" data-id="4">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Dakrandoversteken');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay bottom">
                    <div class="body txt dakrandoversteken">
                        <h2>Dakrandoversteken</h2>
                        <p><strong>Met onze dakrandoversteken combineert u de een mooie look met de onderhoudsvriendelijkheid van kunststof. </strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Waterdicht</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Duurzaam</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Onderhoudsvriendelijk</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/dakoversteken.jpg" alt="PVC dakrandoversteken" title="Ook uw dak verdient een perfecte afwerking.  PVC dakrandoversteken brengen soelaas." width="189" />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/dakranden-dakoversteken.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="pointer" data-left="770" data-top="480" data-id="5">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Ramen');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay bottom">
                    <div class="body txt ramen">
                        <h2>Ramen</h2>
                        <p><strong>Deceuninck ramen zijn hoogisolerend, verfijnd en 100% duurzaam. De kers op de taart van een energiezuinige topwoning.</strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Superieure energieprestaties</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Ruime keuze aan kleuren</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Lange levensduur</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/ramen.jpg" alt="PVC ramen" title="Met PVC ramen wordt energiezuinigheid pas écht realiteit." width="189" />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/ramen-deuren.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="pointer" data-left="1120" data-top="440" data-id="7">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Gevelbekleding');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay bottom">
                    <div class="body txt gevelbekleding">
                        <h2>Gevelbekleding</h2>
                        <p><strong>De Twinson of PVC buitengevelbekleding is de ideale aanvulling op de isolatie van uw gevel: duurzaam, onderhoudsvriendelijk en gemakkelijk geplaatst.</strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Ruime keuze aan natuurlijke kleuren</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Snelle en gemakkelijke plaatsing</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Milieuvriendelijk</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/gevelbekleding.jpg" alt="Twinson gevelbekleding" title="Gevelbekleding: een instant meerwaarde" width="189" />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/gevelbekleding.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="pointer" data-left="1215" data-top="570" data-id="9">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Terrasplanken');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay left">
                    <div class="body txt terras">
                        <h2>Terrasplanken</h2>
                        <p><strong>Twinson terrasplanken zijn gemaakt voor echte levensgenieters. Ze zijn niet alleen een lust voor het oog, maar zijn ook erg slijtvast en splintervrij. </strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Warm gevoel van echt hout</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Makkelijk te plaatsen</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Onderhoudsvriendelijk</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/terras.jpg" alt="Twinson terras" title="Met een Twinson terras geniet u pas écht van het buitenleven" width="189" />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/tuintoepassingen/twinson-terras.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="pointer" data-left="1635" data-top="480" data-id="10">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Tuinafsluiting');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay left">
                    <div class="body txt tuinafsluiting">
                        <h2>Tuinafsluiting</h2>
                        <p><strong>Op zoek naar privacy zonder afbreuk te doen aan de esthetiek van uw tuin? Dan hebt u met Twinson tuinafsluiting eindelijk gevonden wat u zoekt.</strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Warme, natuurlijke look</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Stevig</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                PEFC-gecertificeerd</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/tuinafsluiting.jpg" alt="tuinafsluiting" title="Tuinafsluiting die net dat tikkeltje meer biedt? Daarvoor moet u bij Deceuninck zijn." />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/tuintoepassingen/tuinafsluitingen.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="pointer" data-left="970" data-top="480" data-id="11">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Interieurtoepassingen');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay bottom">
                    <div class="body txt interieurtoepassingen">
                        <h2>Interieurtoepassingen</h2>
                        <p><strong>Met de interieurtoepassingen van Deceuninck creëer je een heel eigen universum, op maat van je persoonlijk smaak.</strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Breed gamma</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Verschillende tinten, vormen en afmetingen</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Onderhoudsvriendelijk</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/interieurtoepassingen.jpg" alt="tuinafsluiting" title="Met de interieurtoepassingen van Deceuninck creëer je een heel eigen universum" />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/interieurtoepassingen.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="pointer" data-left="1255" data-top="450" data-id="11">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Schuifdeuren');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay left">
                    <div class="body txt interieurtoepassingen">
                        <h2>Schuifdeuren</h2>
                        <p><strong>De (schuif)deuren van Deceuninck hebben alles wat uw hartje verlangt: klasse, comfort en een energiezuinigheid om u tegen te zeggen. </strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Hoogisolerend</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Onderhoudsvriendelijk</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Stevig</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/schuifdeur.jpg" alt="schuifdeuren" title="De (schuif)deuren van Deceuninck hebben alles wat uw hartje verlangt" />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/ramen-deuren/pvc-schuifdeuren.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="pointer" data-left="110" data-top="350" data-id="12">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Gevelbekleding');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay right">
                    <div class="body txt gevelbekleding">
                        <h2>Gevelbekleding</h2>
                        <p><strong>De Twinson of PVC buitengevelbekleding is de ideale aanvulling op de isolatie van uw gevel: duurzaam, onderhoudsvriendelijk en gemakkelijk geplaatst.</strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Ruime keuze aan natuurlijke kleuren</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Snelle en gemakkelijke plaatsing</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Milieuvriendelijk</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/gevelbekleding.jpg" alt="Twinson gevelbekleding" title="Gevelbekleding: een instant meerwaarde" width="189" />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/gevelbekleding.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="pointer" data-left="420" data-top="250" data-id="12">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Gevelbekleding');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay right">
                    <div class="body txt gevelbekleding">
                        <h2>Gevelbekleding</h2>
                        <p><strong>De Twinson of PVC buitengevelbekleding is de ideale aanvulling op de isolatie van uw gevel: duurzaam, onderhoudsvriendelijk en gemakkelijk geplaatst.</strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Ruime keuze aan natuurlijke kleuren</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Snelle en gemakkelijke plaatsing</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="" />
                                Milieuvriendelijk</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/gevelbekleding.jpg" alt="Twinson gevelbekleding" title="Gevelbekleding: een instant meerwaarde" width="189" />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/gevelbekleding.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="pointer" data-left="523" data-top="270" data-id="12">
                <a class="image no-nps" onclick="ga('send', 'event', 'Homepage', 'click', 'Rolluiken');">
                    <img src="/Content/PP/Images/house-pointer.png" alt="" width="39" height="38" />
                </a>
                <div class="overlay right">
                    <div class="body txt rolluiken">
                        <h2>Rolluiken</h2>
                        <p><strong>De Deceuninck rolluiken bieden een goede thermische en akoestische isolatie. Bovendien passen ze op alle mogelijke ramen.</strong></p>
                        <ul>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                                Prima isolerend</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                                Inbraakwerend</li>
                            <li>
                                <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                                Breed kleurenpallet</li>
                        </ul>
                    </div>
                    <figure>
                        <img src="/Content/PP/Images/Products/rolluiken.jpg" alt="Rolluiken" title="Deceuninck rolluiken zijn hét visitekaartje van uw gevel." width="189" />
                        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/pvc-rolluiken.aspx">
                            <img src="/Content/PP/Images/house-pointer-overlay-plus.png" width="11" height="11" alt="" />Lees meer</a>
                    </figure>
                    <div class="close">
                        <a href="#" class="no-nps">
                            <img src="/Content/PP/Images/house-pointer-close.svg" alt="" width="11" height="11" /></a>
                    </div>
                </div>
            </div>
            <div class="image">
                <img src="/Content/PP/Images/render4.jpg" alt="duurzaam wonen" title="Deceuninck tilt alle facetten van uw woning naar een hoger niveau. Dat is pas duurzaam wonen!" />
            </div>
        </div>
        <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/contact.aspx?link=knop" onclick="ga('send', 'event', 'Homepage', 'click', 'C2A_Prijsofferte');" class="quote">
            <h1>gratis</h1>
            <h4>prijsofferte</h4>
            <i>
                <img src="/Content/PP/Images/quote-line.jpg" alt="" width="79" height="1" /></i>
            <i>
                <img src="/Content/PP/Images/quote-arrows.svg" alt="" width="17" height="13" /></i>
        </a>
    </section>
    <section id="dealer-locator" class="block left-xlarge">
        <div class="left-large">
            <div class="where-do-you-live">
                <img src="/Content/PP/Images/dealer-locator.svg" alt="" width="20" height="28" />
                <input id="txtDLAddress" type="text" placeholder="Waar woont u?" />
            </div>
            <div class="choose-a-product">
                <div class="dll">
                    <h6 id="ddlDLCategory">Kies één van onze producten</h6>
                    <ul>
                    </ul>
                </div>
                <a href="#" class="find">Vind een verdeler</a>
            </div>
        </div>
    </section>
    <section id="slider" class="block left-large">
        <div class="nav">
            <a href="#" class="prev no-nps">
                <img src="/Content/PP/Images/slider-prev.svg" width="28" height="41" alt="" /></a>
            <a href="#" class="next no-nps">
                <img src="/Content/PP/Images/slider-next.svg" width="28" height="41" alt="" /></a>
        </div>
        <div class="items">
            <article>
                <figure>
                    <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/voordeelcheque.aspx"><img src="/Content/PP/Images/slider-pic1.jpg" alt="" /></a>
                </figure>
                <div class="body txt">
                    <h1>Cash-back actie : Tot 250 euro extra korting!</h1>
                    <p>Wie zijn ramen vervangt kan beroep doen op heel wat premies – maar het blijft natuurlijk een investering. Deceuninck wil zowel bouwers als verbouwers een financieel duwtje in de rug geven om  te kiezen voor energiebesparend én mooi schrijnwerk. Dankzij deze actie krijgen particuliere bouwers en verbouwers bij aankoop van minimaal 10 ramen in kleur 250 euro terugbetaald. Bij aankoop van 5 t.e.m. 9 ramen in kleur is dit 100 euro</p>
                    <p>Meer info <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/voordeelcheque.aspx">klik hier</a></p>
                </div>
            </article>
            <article>
                <figure>
                    <img src="/Content/PP/Images/slider-pic2.jpg" alt="250 euro extra korting ramen" title="Tot 250 euro extra korting op uw ramen" />
                </figure>
                <div class="body txt">
                    <h1>Ramen in PVC</h1>
                    <h2>Ramen in PVC bieden een optimale thermische en akoestische isolatie met een uitgebreid kleurenpalet. De kers op de taart van een energiezuinige woning!</h2>
                    <ul>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Energiebesparend</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Hoogkwalitatief PVC werk</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Elegante profielen</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Optimale isolatie</li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
    <section id="links" class="block left-xlarge">
        <div class="left-large">
            <article>
                <header>
                    <h1>Hoeveel bespaart u<br />
                        met nieuwe ramen?</h1>
                </header>
                <footer>
                    <a class="popUpWindowEnergyCalculator" href="http://www.deceuninck.be/nl/energiecalculator/Default.html?ID=250&CountryCode=BE&LanguageCode=NL" target="_blank" onclick="ga('send', 'event', 'Homepage', 'click', 'Energiesimulator');">
                        <img src="/Content/PP/Images/links-arrow.svg" width="9" height="15" alt="" />naar de energie simulator</a>
                </footer>
            </article>
            <article>
                <header>
                    <h1>Vind de kleur die perfect<br />
                        bij u past!</h1>
                </header>
                <footer>
                    <a class="popUpWindowColorSim" href="http://windowscoloursimulator.com/be_btnFoot/?lang_id=002" target="_blank" onclick="ga('send', 'event', 'Homepage', 'click', 'Kleurensimulator');">
                        <img src="/Content/PP/Images/links-arrow.svg" width="9" height="15" alt="" />Naar de kleurensimulator</a>
                </footer>
            </article>
        </div>
    </section>
    <section id="products" class="block left-xlarge">
        <h1 class="center-title">Alle PVC &amp; Twinson oplossingen voor uw woning</h1>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/ramen-deuren.aspx" class="ramen" title="Met PVC ramen wordt energiezuinigheid pas écht realiteit.">
                <figure>
                    <img src="/Content/PP/Images/Products/ramen.jpg" class="image" alt="PVC ramen" title="Met PVC ramen wordt energiezuinigheid pas écht realiteit." />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Ramen</h1>
                        <h2>PVC ramen combineren een optimale thermische en akoestische isolatie met een uitgebreid kleurenpalet.</h2>
                    </header>
                    <ul>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Energiebesparend</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Ruime kleurcollectie</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Onderhoudsvriendelijk</li>
                    </ul>
                </div>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/tuintoepassingen/twinson-terras.aspx" class="terras" title="Met een Twinson terras geniet u pas écht van het buitenleven">
                <figure>
                    <img src="/Content/PP/Images/Products/terras.jpg" class="image" alt="Twinson terras" title="Met een Twinson terras geniet u pas écht van het buitenleven" />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Terras</h1>
                        <h2>Een Twinson terras is slipvast, onderhoudsvriendelijk en PEFC-gecertificeerd. De natuurlijke look-and-feel krijgt u er zomaar bij.</h2>
                    </header>
                    <ul>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Onderhoudsvriendelijk</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Makkelijk te plaatsen</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Slipvast, ook in natte toestand</li>
                    </ul>
                </div>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/gevelbekleding.aspx" class="gevelbekleding" title="Gevelbekleding: een instant meerwaarde">
                <div class="body txt">
                    <header>
                        <h1>Gevelbekleding</h1>
                        <h2>De buitengevelbekleding vormt de perfecte aanvulling op uw isolatie.</h2>
                    </header>
                    <ul>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Onderhoudsvriendelijk</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Makkelijk te plaatsen</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Ruim kleurenpallet</li>
                    </ul>
                </div>
                <figure>
                    <img src="/Content/PP/Images/Products/gevelbekleding.jpg" class="image" alt="Twinson gevelbekleding" title="Gevelbekleding: een instant meerwaarde" />
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
                        <h1>Schuifdeuren</h1>
                        <h2>Met Zendow#neo en Monorail biedt Deceuninck u het neusje van de zalm onder de deuren en schuifdeuren. </h2>
                    </header>
                    <ul>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Energiebesparend</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Inbraakwerend</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Stijlvol en licht</li>
                    </ul>
                </div>
                <figure>
                    <img src="/Content/PP/Images/Products/schuifdeur.jpg" class="image" alt="PVC schuifdeuren" title="PVC schuifdeuren: elegant comfort" />
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
                    <img src="/Content/PP/Images/Products/deuren.jpg" class="image" alt="PVC deuren" title="De PVC deuren van Deceuninck hebben álles wat u verlangt: flair, robuustheid én topisolatie." />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Deuren</h1>
                        <h2>Onze Zendow en Zendow#neo deuren zien er prachtig uit, bieden een uitstekende isolatie en zijn ook naar wens personaliseerbaar.</h2>
                    </header>
                    <ul>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Energiebesparend</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Inbraakwerend</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Puur comfort</li>
                    </ul>
                </div>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/tuintoepassingen/tuinafsluitingen.aspx" class="tuinafsluiting" title="Tuinafsluiting die net dat tikkeltje meer biedt? Daarvoor moet u bij Deceuninck zijn.">
                <figure>
                    <img src="/Content/PP/Images/Products/tuinafsluiting.jpg" class="image" alt="tuinafsluiting" title="Tuinafsluiting die net dat tikkeltje meer biedt? Daarvoor moet u bij Deceuninck zijn." />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Tuinafsluiting</h1>
                        <h2>Twinson tuinafsluiting combineert discretie met stevigheid, elegantie en comfort. Puur genieten.</h2>
                    </header>
                    <ul>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Natuurlijke look-and-feel</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            100% discreet</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Stevig</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Milieuvriendelijk</li>
                    </ul>
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
                    <ul>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Onderhoudsarm</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Ruime kleurencollectie</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Snelle plaatsing</li>
                    </ul>
                </div>
                <figure>
                    <img src="/Content/PP/Images/Products/dakoversteken.jpg" class="image" alt="PVC dakrandoversteken" title="Ook uw dak verdient een perfecte afwerking.  PVC dakrandoversteken brengen soelaas." />
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
                    <ul>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Onderhoudsarm</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Breed kleurenpallet (zelfde als ramen)</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Perfect afgewerkt op maat</li>
                    </ul>
                </div>
                <figure>
                    <img src="/Content/PP/Images/Products/luiken.jpg" class="image" alt="Deceuninck luiken." title="Deceuninck luiken tillen uw gevel naar een hoger niveau." />
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
                    <img src="/Content/PP/Images/Products/rolluiken.jpg" class="image" alt="Deceuninck rolluiken" title="Deceuninck rolluiken zijn hét visitekaartje van uw gevel." />
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
                    <ul>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Prima isolerend</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Inbraakwerend</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Breed kleurenpallet</li>
                    </ul>
                </div>
            </a>
        </article>
        <article>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/interieurtoepassingen.aspx" class="interieurtoepassingen" title="Met ons breed gamma aan interieurtoepassingen creëert u een heel eigen universum.">
                <figure>
                    <img src="/Content/PP/Images/Products/interieurtoepassingen.jpg" class="image" alt="interieurtoepassingen" title="Met ons breed gamma aan interieurtoepassingen creëert u een heel eigen universum." />
                    <figcaption>
                        <span>
                            <img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />lees meer
                        </span>
                    </figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Interieurtoepassingen</h1>
                        <h2>Van plinten tot vensterbanken, met ons gamma aan interieurtoepassingen is uw droominterieur nooit veraf.</h2>
                    </header>
                    <ul>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            100% waterafstotend</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Gemakkelijk te plaatsen</li>
                        <li>
                            <img src="/Content/PP/Images/house-pointer-overlay-check.svg" width="13" height="10" alt="check" />
                            Onderhoudsvriendelijk</li>
                    </ul>
                </div>
            </a>
        </article>
    </section>
    <section id="brochure" class="block center-xlarge">
        <h1>Gratis stalen of brochures?</h1>
        <footer>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/gratis-stalen.aspx" onclick="ga('send', 'event', 'Homepage', 'click', 'Samples');">
                <img src="/Content/PP/Images/links-arrow.svg" width="9" height="15" alt="" />vraag stalen aan</a>
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/gratis-brochure.aspx" onclick="ga('send', 'event', 'Homepage', 'click', 'Brochures');">
                <img src="/Content/PP/Images/links-arrow.svg" width="9" height="15" alt="" />vraag brochures aan</a>
        </footer>
    </section>
    <section id="news" class="block center-large">
        <h1 class="center-title">Nieuws van en over Deceuninck</h1>
        <article class="news-item">
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/blog/batibouw-2015-drie-bouwtrends-waar-je-niet-omheen-kan/" class="go-to">
                <figure>
                    <img src="/Content/PP/Images/newspic3.jpg" alt="Batibouw 2015: drie bouwtrends waar je niet omheen kan" />
                    <figcaption><span>Meer weten over Batibouw 2015 ?</span></figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Batibouw 2015: drie bouwtrends waar je niet omheen kan</h1>
                    </header>
                    <p><time>02/01</time>  |  Heb je plannen om je woning op te waarderen? Of staat er een nieuwbouwproject in de steigers? Dan is Batibouw 2015 dé beurs bij uitstek om inspiratie op te doen of om in contact te komen met de meest innovatieve spelers op de markt. Uiteraard is ook Deceuninck weer van de partij. We geven er een antwoord op al je vragen en stellen je met trots onze hoogisolerende ramen en deuren voor. Die sluiten overigens perfect aan bij de Batibouw-thema’s van dit jaar. Lees er hier alles over!</p>
                    <footer>
                    </footer>
                </div>
            </a>
        </article>
        <article class="news-item">
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/blog/zendowneo-wint-innovation-award-voor-hybride-kunststoftechnologie/" class="go-to">
                <figure>
                    <img src="/Content/PP/Images/newspic1.jpg" alt="Zendow#neo wint Innovation Award voor hybride kunststoftechnologie" />
                    <figcaption><span>Meer weten over de Innovation Award voor hybride kunststoftechnologie?</span></figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Zendow#neo wint Innovation Award voor hybride kunststoftechnologie</h1>
                    </header>
                    <p><time>21/11</time>  |  Tom Debusschere, CEO van Deceuninck, heeft op dinsdag 4 november de internationale Innovation Award van the Society of Plastic Engineers (SPE) in de categorie Hybrid Products in ontvangst mogen nemen uit handen van Europees Parlementslid Martina Dlabajová. Als marktleider in PVC-profielen ontvingen we de prijs dankzij de toepassing van onze unieke Linktrusion-technologie in de Deceuninck Zendow#neo-raam- en deurseries.</p>
                    <footer>
                    </footer>
                </div>
            </a>
        </article>
        <article class="news-item">
            <a href="http://<%= Request.ServerVariables.Get("HTTP_HOST") %>/nl/potdeksel-gevelplank-167.aspx" class="go-to">
                <figure>
                    <img src="/Content/PP/Images/newspic2.jpg" alt="Deceuninck introduceert nieuwe Potdeksel-gevelplank" />
                    <figcaption><span>Meer weten over de Potdeksel-gevelplank?</span></figcaption>
                </figure>
                <div class="body txt">
                    <header>
                        <h1>Deceuninck introduceert nieuwe Potdeksel-gevelplank</h1>
                    </header>
                    <p><time>26/11</time>  | Deceuninck is vooral bekend om zijn raam- en deursystemen, maar beschikt ook over een ruim assortiment gevelbekledingsoplossingen. Aan zijn assortiment planken in pvc-hardschuim voorzien van een pvc-toplaag, de zgn. ‘Standaard’-reeks, voegt Deceuninck nu een nieuw type plank toe:  de Potdeksel 167-plank (P 1036). Die wordt overlappend geplaatst, heeft  een aantrekkelijke nerfstructuur en is verkrijgbaar is in 8 duurzame kleuren.</p>
                    <footer></footer>
                </div>
            </a>
        </article>
    </section>

  
</asp:Content>
