const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/apps", async (req, res) => {
  const apps = await prisma.apps.findMany();
  res.json(apps);
});

app.get("/search", async (req, res) => {
    const apps = await prisma.apps.findMany({
        where: {
            name: {
              startsWith: req.query.name,
            },
          },
    });
    if(req.query.name === "")
        res.json({});
    else
        res.json(apps);
  });

app.post("/apps", async (req, res) => {
const { data } = req.body;
  console.log(`data : ${data}`);
  try {
    const nuevapp = await prisma.apps.createManyAndReturn({
        data: [
            {
                "id": "activecampaign",
                "name": "ActiveCampaign",
                "domains": "https://www.activecampaign.com"
              },
              {
                "id": "adbanker",
                "name": "A.D.Banker",
                "domains": "adbanker.com"
              },
              {
                "id": "adobe",
                "name": "Adobe",
                "domains": "adobe.com"
              },
              {
                "id": "adp",
                "name": "ADP",
                "domains": "adp.com"
              },
              {
                "id": "adroll",
                "name": "AdRoll",
                "domains": "adroll.com"
              },
              {
                "id": "ahrefs",
                "name": "AHrefs",
                "domains": "ahrefs.com"
              },
              {
                "id": "aircall",
                "name": "Aircall",
                "domains": "https://aircall.io/"
              },
              {
                "id": "alchemer",
                "name": "alchemer",
                "domains": "https://www.alchemer.com/"
              },
              {
                "id": "amazon_seller",
                "name": "Amazon Seller",
                "domains": "sellercentral.amazon.com"
              },
              {
                "id": "amazon_seller_tenant",
                "name": "Amazon Seller",
                "domains": ""
              },
              {
                "id": "ap_images",
                "name": "Ap Images",
                "domains": "apimages.com"
              },
              {
                "id": "ap_newsroom",
                "name": "AP Newsroom",
                "domains": "newsroom.ap.com"
              },
              {
                "id": "appdynamics",
                "name": "AppDynamics",
                "domains": "https://www.appdynamics.com"
              },
              {
                "id": "appfigures",
                "name": "Appfigures",
                "domains": "https://appfigures.com/"
              },
              {
                "id": "apple",
                "name": "Apple",
                "domains": "apple.com"
              },
              {
                "id": "apple_tenant",
                "name": "Apple",
                "domains": "https://appstoreconnect.apple.com/"
              },
              {
                "id": "appsflyer",
                "name": "AppsFlyer",
                "domains": "appsflyer.com"
              },
              {
                "id": "arbor_custhelp",
                "name": "Arbor Customer Help",
                "domains": "https://arbor.custhelp.com"
              },
              {
                "id": "arbor_noc",
                "name": "Arbor Sightline",
                "domains": "https://arbor.noc.seabone.net/"
              },
              {
                "id": "arcgis",
                "name": "Arcgis",
                "domains": "https://www.arcgis.com/home"
              },
              {
                "id": "arelion",
                "name": "Arelion",
                "domains": "https://www.arelion.com/"
              },
              {
                "id": "arf",
                "name": "The ARF",
                "domains": "thearf.org"
              },
              {
                "id": "articulate",
                "name": "Articulate",
                "domains": "https://www.articulate.com"
              },
              {
                "id": "artifactory",
                "name": "Artifactory",
                "domains": "https://jfrog.com/artifactory/"
              },
              {
                "id": "asana",
                "name": "Asana",
                "domains": "https://app.asana.com/"
              },
              {
                "id": "asana_tenant",
                "name": "Asana",
                "domains": ""
              },
              {
                "id": "atlassian",
                "name": "Atlassian",
                "domains": "atlassian.com"
              },
              {
                "id": "atlassian_tenant",
                "name": "Atlassian",
                "domains": "atlassian.com"
              },
              {
                "id": "automox",
                "name": "automox",
                "domains": "https://www.automox.com/"
              },
              {
                "id": "avis",
                "name": "AVIS",
                "domains": "avis.com"
              },
              {
                "id": "aws",
                "name": "AWS",
                "domains": "https://signin.aws.amazon.com/"
              },
              {
                "id": "awwwards",
                "name": "awwwards",
                "domains": "awwwards.com"
              },
              {
                "id": "axur",
                "name": "Axur",
                "domains": "https://id.axur.com/"
              },
              {
                "id": "bamboohr",
                "name": "BambooHR",
                "domains": "https://www.bamboohr.com/"
              },
              {
                "id": "basecamp",
                "name": "Basecamp",
                "domains": "basecamp.com"
              },
              {
                "id": "bbcsport",
                "name": "BBC Sport",
                "domains": "account.bbc.com"
              },
              {
                "id": "befunky",
                "name": "BeFunky",
                "domains": "befunky.com"
              },
              {
                "id": "bill",
                "name": "Bill",
                "domains": "bill.com"
              },
              {
                "id": "bim360",
                "name": "bim360",
                "domains": "https://www.autodesk.com/"
              },
              {
                "id": "bitrise",
                "name": "Bitrise",
                "domains": "bitrise.io"
              },
              {
                "id": "bleacherreport",
                "name": "Bleacher Report",
                "domains": "bleacherreport.com"
              },
              {
                "id": "booking",
                "name": "Booking",
                "domains": ""
              },
              {
                "id": "box",
                "name": "Box",
                "domains": "box.com"
              },
              {
                "id": "brickftp",
                "name": "BrickFTP",
                "domains": "https://www.files.com/"
              },
              {
                "id": "brosix",
                "name": "Brosix",
                "domains": "brosix.com"
              },
              {
                "id": "browserstack",
                "name": "browserstack",
                "domains": "https://www.browserstack.com/users/sign_in"
              },
              {
                "id": "buffer",
                "name": "Buffer",
                "domains": "buffer.com"
              },
              {
                "id": "bugfender",
                "name": "BugFender",
                "domains": "https://bugfender.com"
              },
              {
                "id": "buzzsprout",
                "name": "Buzzsprout",
                "domains": "buzzsprout.com"
              },
              {
                "id": "buzzsumo",
                "name": "BuzzSumo",
                "domains": "buzzsumo.com"
              },
              {
                "id": "calendly",
                "name": "Calendly",
                "domains": "calendly.com"
              },
              {
                "id": "calendly_tenant",
                "name": "Calendly Tenant",
                "domains": "calendly.com"
              },
              {
                "id": "callrail",
                "name": "CallRail",
                "domains": "https://www.callrail.com/"
              },
              {
                "id": "campaignmonitor",
                "name": "Campaign Monitor",
                "domains": "campaignmonitor.com"
              },
              {
                "id": "canva",
                "name": "Canva",
                "domains": "https://www.canva.com/"
              },
              {
                "id": "capsulecrm",
                "name": "CapsuleCRM",
                "domains": "https://www.engagebay.com/"
              },
              {
                "id": "captivate",
                "name": "Captivate",
                "domains": "captivate.fm"
              },
              {
                "id": "chargebee",
                "name": "Chargebee",
                "domains": "https://www.chargebee.com/"
              },
              {
                "id": "chargeover",
                "name": "chargeover",
                "domains": "https://app.chargeover.com/login"
              },
              {
                "id": "chicago_tribune",
                "name": "Chicago Tribune",
                "domains": "chicagotribune.com"
              },
              {
                "id": "ciscodl",
                "name": "Cisco Digital Learning",
                "domains": "https://digital-learning.cisco.com/"
              },
              {
                "id": "clayandbuck",
                "name": "Clay and Buck",
                "domains": "clayandbuck.com"
              },
              {
                "id": "clinchpad",
                "name": "ClinchPad",
                "domains": "https://clinchpad.com/,clinchpad.com"
              },
              {
                "id": "concacaf",
                "name": "Concacaf",
                "domains": "concacaf.com"
              },
              {
                "id": "constantcontact",
                "name": "Constant Contact",
                "domains": "constantcontact.com"
              },
              {
                "id": "crazyegg",
                "name": "CrazyEgg",
                "domains": "crazyegg.com"
              },
              {
                "id": "crowdfire",
                "name": "CrowdFire",
                "domains": "croudfireapp.com"
              },
              {
                "id": "cyfe",
                "name": "Cyfe",
                "domains": "cyfe.com"
              },
              {
                "id": "databox",
                "name": "Databox",
                "domains": "https://databox.com/,databox.com/"
              },
              {
                "id": "databricks",
                "name": "Databricks",
                "domains": "databricks.com"
              },
              {
                "id": "datadog",
                "name": "DataDog",
                "domains": "https://www.datadoghq.com/,datadoghq.com"
              },
              {
                "id": "df_studio",
                "name": "DF Studio",
                "domains": "https://www.dfstudio.com/df-studio-login/"
              },
              {
                "id": "dialpad",
                "name": "Dialpad",
                "domains": "dialpad.com"
              },
              {
                "id": "discord",
                "name": "Discord",
                "domains": "discord.com"
              },
              {
                "id": "discoverorg",
                "name": "DiscoverOrg",
                "domains": "discoverorg.com"
              },
              {
                "id": "disney_abc_press",
                "name": "Disney ABC Press",
                "domains": "dgepress.com"
              },
              {
                "id": "docker",
                "name": "Docker",
                "domains":"" 
              },
              {
                "id": "docusign",
                "name": "Docusign",
                "domains": "docusign.com"
              },
              {
                "id": "domo",
                "name": "Domo",
                "domains": "domo.com"
              },
              {
                "id": "dvids",
                "name": "dvids",
                "domains": "dvidshub.net"
              },
              {
                "id": "elastic",
                "name": "Elastic",
                "domains": "elastic.co"
              },
              {
                "id": "email_templates",
                "name": "Email Templates",
                "domains": "email-templates.app"
              },
              {
                "id": "emplifi",
                "name": "Emplifi",
                "domains": "https://www.socialbakers.com/,https://emplifi.io"
              },
              {
                "id": "entrust",
                "name": "Entrust",
                "domains": "entrust.net"
              },
              {
                "id": "everlaw",
                "name": "Everlaw",
                "domains": "https://www.everlaw.com/"
              },
              {
                "id": "expensify",
                "name": "Expensify",
                "domains": "expensify.com"
              },
              {
                "id": "facebook",
                "name": "Facebook",
                "domains": ""
              },
              {
                "id": "facebook business manager",
                "name": "Facebook Business Manager",
                "domains": ""
              },
              {
                "id": "facebook_ad",
                "name": "Facebook Ad",
                "domains":"" 
              },
              {
                "id": "facebook_business_manager",
                "name": "Meta Business",
                "domains": ""
              },
              {
                "id": "facebook_catalog",
                "name": "Facebook Catalog",
                "domains": ""
              },
              {
                "id": "facebook_page",
                "name": "Facebook Page",
                "domains": ""
              },
              {
                "id": "facebook_pixel",
                "name": "Facebook Pixel",
                "domains": ""
              },
              {
                "id": "facebook_profile",
                "name": "Facebook",
                "domains": "facebook.com"
              },
              {
                "id": "facebook_tenant",
                "name": "Facebook",
                "domains": "business.facebook.com,facebook.com"
              },
              {
                "id": "faxplus",
                "name": "faxplus",
                "domains": "fax.plus"
              },
              {
                "id": "feedly",
                "name": "Feedly",
                "domains": "feedly.com"
              },
              {
                "id": "flatfile",
                "name": "Flatfile",
                "domains": ""
              },
              {
                "id": "flatfile_tenant",
                "name": "Flatfile tenant",
                "domains": "app.flatfile.com,flatfile.com"
              },
              {
                "id": "flickr",
                "name": "Flickr",
                "domains": "flickr.com"
              },
              {
                "id": "fortinet",
                "name": "Fortinet",
                "domains": "https://support.fortinet.com/welcome/"
              },
              {
                "id": "freeagent",
                "name": "Free Agent",
                "domains": "https://www.freeagent.com/en/"
              },
              {
                "id": "getdbt",
                "name": "GetDBT",
                "domains": "getdbt.com"
              },
              {
                "id": "getfeedback",
                "name": "GetFeedback",
                "domains": "getfeedback.com"
              },
              {
                "id": "gettyimages",
                "name": "Gettyimages",
                "domains": "gettyimages.com,gettyimages.com.mx"
              },
              {
                "id": "giphy",
                "name": "Giphy",
                "domains": "https://giphy.com"
              },
              {
                "id": "github",
                "name": "Github",
                "domains": "github.com"
              },
              {
                "id": "github_tenant",
                "name": "Github",
                "domains": "https://www.github.com"
              },
              {
                "id": "glassdoor",
                "name": "Glassdoor",
                "domains": "glassdoor.com"
              },
              {
                "id": "go_to_webinar",
                "name": "GoTo",
                "domains": "https://www.goto.com"
              },
              {
                "id": "godaddy",
                "name": "GoDaddy",
                "domains": "godaddy.com"
              },
              {
                "id": "gooddata",
                "name": "GoodData",
                "domains": "gooddata.com"
              },
              {
                "id": "google",
                "name": "Google",
                "domains": "google.com"
              },
              {
                "id": "goto",
                "name": "GoTo",
                "domains": "authentication.logmeininc.com"
              },
              {
                "id": "grabcad",
                "name": "GrabCAD",
                "domains": "grabcad.com"
              },
              {
                "id": "grammarly",
                "name": "Grammarly",
                "domains": "grammarly.com"
              },
              {
                "id": "grayscale",
                "name": "Grayscale",
                "domains": "grayscale.com"
              },
              {
                "id": "greenhouse",
                "name": "Greenhouse",
                "domains": "greenhouse.io"
              },
              {
                "id": "gusto",
                "name": "Gusto",
                "domains": "gusto.com"
              },
              {
                "id": "harvest",
                "name": "harvest",
                "domains": "https://id.getharvest.com/harvest/sign_in"
              },
              {
                "id": "heap",
                "name": "Heap",
                "domains": "heap.io"
              },
              {
                "id": "hightail",
                "name": "Hightail",
                "domains": "hightail.com"
              },
              {
                "id": "hive",
                "name": "Hive",
                "domains": "https://hive.com/"
              },
              {
                "id": "hootsuite",
                "name": "Hootsuite",
                "domains": "hootsuite.com"
              },
              {
                "id": "hubspot",
                "name": "Hubspot",
                "domains": "hubspot.com"
              },
              {
                "id": "iab",
                "name": "IAB",
                "domains": "iab.com"
              },
              {
                "id": "ibm_aspera",
                "name": "IBM Aspera",
                "domains": "ibm.com"
              },
              {
                "id": "ifttt",
                "name": "IFTTT",
                "domains": "ifttt.com"
              },
              {
                "id": "igloo_profile",
                "name": "Igloo Profile",
                "domains": "igloodigitalworkplace.ca"
              },
              {
                "id": "igloo_tenant",
                "name": "Igloo Tenant",
                "domains": "igloodigitalworkplace.ca"
              },
              {
                "id": "ignition",
                "name": "Ignition",
                "domains": "ignitionapp.com"
              },
              {
                "id": "indeed",
                "name": "Indeed",
                "domains": "indeed.com"
              },
              {
                "id": "instagram",
                "name": "Instagram",
                "domains": "instagram.com,www.instagram.com"
              },
              {
                "id": "interviewstream",
                "name": "interviewstream",
                "domains": "interviewstream.com"
              },
              {
                "id": "istockphoto",
                "name": "iStock Photo",
                "domains": "istockphoto.com"
              },
              {
                "id": "isura_gex",
                "name": "Isura GEX",
                "domains": "stg-gex.isura-ti.com"
              },
              {
                "id": "isura_rlh",
                "name": "Isura RLH",
                "domains": "stg-rlh.isura-ti.com"
              },
              {
                "id": "jotform",
                "name": "Jotform",
                "domains": "jotform.com"
              },
              {
                "id": "jumpcloud",
                "name": "JumpCloud",
                "domains": "https://jumpcloud.com/,jumpcloud.com"
              },
              {
                "id": "justcall",
                "name": "JustCall",
                "domains": "https://justcall.io/"
              },
              {
                "id": "jwplayer",
                "name": "JWPlayer",
                "domains": "jwplayer.com"
              },
              {
                "id": "kahoot",
                "name": "Kahoot",
                "domains": "kahoot.it"
              },
              {
                "id": "kanbanize",
                "name": "Kanbanize",
                "domains": "https://kanbanize.com/"
              },
              {
                "id": "kenesto_drive",
                "name": "Kenesto Drive",
                "domains": "kenesto.com"
              },
              {
                "id": "kintone",
                "name": "Kintone",
                "domains": "https://www.kintone.com/en-us/"
              },
              {
                "id": "later",
                "name": "later",
                "domains": "later.com"
              },
              {
                "id": "latimes",
                "name": "LA Times",
                "domains": "https://www.latimes.com"
              },
              {
                "id": "launchdarkly",
                "name": "LaunchDarkly",
                "domains": "https://launchdarkly.com/"
              },
              {
                "id": "linkedin",
                "name": "LinkedIn",
                "domains": "linkedin.com"
              },
              {
                "id": "linkedin_ads",
                "name": "Linkedin Ads",
                "domains": ""
              },
              {
                "id": "linktree",
                "name": "linktree",
                "domains": "linktr.ee"
              },
              {
                "id": "logrocket",
                "name": "LogRocket",
                "domains": "logrocket.com"
              },
              {
                "id": "loom",
                "name": "Loom",
                "domains": "loom.com"
              },
              {
                "id": "mailchimp",
                "name": "Mailchimp",
                "domains": "mailchimp.com"
              },
              {
                "id": "mailchimp_tenant",
                "name": "Mailchimp Tenant",
                "domains": "admin.mailchimp.com,mailchimp.com"
              },
              {
                "id": "mastodon",
                "name": "Mastodon Social",
                "domains": "https://mastodon.social"
              },
              {
                "id": "matomo",
                "name": "Matomo",
                "domains": "https://matomo.org/"
              },
              {
                "id": "maxon",
                "name": "Maxon",
                "domains": "maxon.net"
              },
              {
                "id": "mention",
                "name": "Mention",
                "domains": "mention.com"
              },
              {
                "id": "microsoft365",
                "name": "Microsoft365",
                "domains": "https://www.microsoft.com/en/microsoft-365"
              },
              {
                "id": "microsoft365_enterprise",
                "name": "Microsoft365 Enterprise",
                "domains": "https://www.microsoft.com/en/microsoft-365"
              },
              {
                "id": "mindmeister",
                "name": "MindMeister",
                "domains": "mindmeister.com"
              },
              {
                "id": "miro",
                "name": "miro",
                "domains": ""
              },
              {
                "id": "mobiniti",
                "name": "Mobiniti",
                "domains": "mobiniti.com"
              },
              {
                "id": "motionarray",
                "name": "MotionArray",
                "domains": "motionarray.com"
              },
              {
                "id": "mural",
                "name": "Mural",
                "domains": "mural.com"
              },
              {
                "id": "namecheap",
                "name": "Namecheap",
                "domains": "namecheap.com"
              },
              {
                "id": "net_components",
                "name": "Net Components",
                "domains": "www.netcomponents.com"
              },
              {
                "id": "netlify",
                "name": "Netlify",
                "domains": "netlify.com"
              },
              {
                "id": "newzdash",
                "name": "NewzDash",
                "domains": "newzdash.com"
              },
              {
                "id": "nylas",
                "name": "Nylas",
                "domains": "nylas.com"
              },
              {
                "id": "nytimes",
                "name": "New York Times",
                "domains": "https://www.nytimes.com/"
              },
              {
                "id": "ok_ru",
                "name": "Ok.ru",
                "domains": "ok.ru"
              },
              {
                "id": "okta",
                "name": "Okta",
                "domains": "okta.com"
              },
              {
                "id": "onshape",
                "name": "OnShape",
                "domains": "onshape.com"
              },
              {
                "id": "otoy",
                "name": "OTOY",
                "domains": "account.otoy.com"
              },
              {
                "id": "pagerduty",
                "name": "PagerDuty",
                "domains": "https://www.pagerduty.com/"
              },
              {
                "id": "pagertree",
                "name": "Pager Tree",
                "domains": "pagertree.com"
              },
              {
                "id": "panacea",
                "name": "Panacea",
                "domains": "https://panacea.threatgrid.com/"
              },
              {
                "id": "pandadoc",
                "name": "PandaDoc",
                "domains": "https://www.pandadoc.com/"
              },
              {
                "id": "pff",
                "name": "PFF",
                "domains": "auth.pff.com,pff.com"
              },
              {
                "id": "pinterest",
                "name": "Pinterest",
                "domains": "pinterest.com.mx,pinterest.com"
              },
              {
                "id": "pinterest_ads",
                "name": "Pinterest Ads",
                "domains": "www.pinterest.com,www.pinterest.com.mx"
              },
              {
                "id": "pinterest_business",
                "name": "Pinterest Business",
                "domains": "pinterest.com.mx,pinterest.com"
              },
              {
                "id": "pinterest_business_tenant",
                "name": "Pinterest Business Tenant",
                "domains": "business.pinterest.com,pinterest.com.mx,pinterest.com"
              },
              {
                "id": "pipedrive",
                "name": "Pipedrive",
                "domains": "pipedrive.com"
              },
              {
                "id": "pipeliner",
                "name": "Pipeliner",
                "domains": "pipelinersales.com"
              },
              {
                "id": "pitch",
                "name": "Pitch",
                "domains": "pitch.com"
              },
              {
                "id": "placeit",
                "name": "PlaceIt",
                "domains": "placeit.net"
              },
              {
                "id": "pocket",
                "name": "Pocket",
                "domains": "getpocket.com"
              },
              {
                "id": "postgrain",
                "name": "Postgrain",
                "domains": "postgrain.com"
              },
              {
                "id": "postman",
                "name": "Postman",
                "domains": "postman.com"
              },
              {
                "id": "quora",
                "name": "Quora",
                "domains": "quora.com"
              },
              {
                "id": "radware",
                "name": "Radware",
                "domains": "https://ddos.radwarecloud.com/"
              },
              {
                "id": "raygun",
                "name": "Raygun",
                "domains": "raygun.com"
              },
              {
                "id": "realpage_umresident",
                "name": "RealPage UMResident",
                "domains": "umresident.realpage.com/"
              },
              {
                "id": "reddit",
                "name": "Reddit",
                "domains": "reddit.com"
              },
              {
                "id": "reddit_ads",
                "name": "Reddit Ads",
                "domains": "ads.reddit.com"
              },
              {
                "id": "rocket_chat",
                "name": "rocket.chat",
                "domains": "rocket.chat"
              },
              {
                "id": "roku_developer",
                "name": "Roku Developer",
                "domains": "developer.roku.com"
              },
              {
                "id": "saasu",
                "name": "saasu",
                "domains": "https://www.saasu.com/"
              },
              {
                "id": "salesforce",
                "name": "Salesforce",
                "domains": "salesforce.com"
              },
              {
                "id": "screaming_frog",
                "name": "Screaming Frog",
                "domains": "screamingfrog.co.uk"
              },
              {
                "id": "segment",
                "name": "Segment",
                "domains": "segment.com"
              },
              {
                "id": "servd",
                "name": "Servd",
                "domains": "servd.host"
              },
              {
                "id": "service_now",
                "name": "Service now",
                "domains": "www.servicenow.com"
              },
              {
                "id": "shodan",
                "name": "Shodan",
                "domains": "https://www.shodan.io/"
              },
              {
                "id": "shopify",
                "name": "Shopify",
                "domains": "shopify.com"
              },
              {
                "id": "similarweb",
                "name": "Similarweb",
                "domains": "domo.com"
              },
              {
                "id": "sketch",
                "name": "Sketch",
                "domains": "sketch.com"
              },
              {
                "id": "slack",
                "name": "Slack",
                "domains": "slack.com"
              },
              {
                "id": "slido",
                "name": "Slido",
                "domains": "slido.com"
              },
              {
                "id": "smartsheet",
                "name": "Smartsheet",
                "domains": "Smartsheet.com"
              },
              {
                "id": "snapchat",
                "name": "Snapchat",
                "domains": "accounts.snapchat.com,snapchat.com"
              },
              {
                "id": "snapchat_ads",
                "name": "Snapchat Ads",
                "domains": ""
              },
              {
                "id": "snapchat_business",
                "name": "Snapchat Business",
                "domains": ""
              },
              {
                "id": "socialflow",
                "name": "SocialFlow",
                "domains": "socialflow.com"
              },
              {
                "id": "soundstripe",
                "name": "Soundstripe",
                "domains": "soundstripe.com"
              },
              {
                "id": "spendesk",
                "name": "Spendesk",
                "domains": "spendesk.com"
              },
              {
                "id": "spotify",
                "name": "Spotify",
                "domains": "spotify.com"
              },
              {
                "id": "sprinklr",
                "name": "Sprinklr",
                "domains": "https://www.sprinklr.com/"
              },
              {
                "id": "sprinklr_enterprise",
                "name": "Sprinklr Enterprise",
                "domains": "https://www.sprinklr.com/"
              },
              {
                "id": "sproutsocial",
                "name": "Sproutsocial",
                "domains": "https://sproutsocial.com/"
              },
              {
                "id": "spyfu",
                "name": "SpyFu",
                "domains": "spyfu.com"
              },
              {
                "id": "stackoverflow_enterprise",
                "name": "StackOverflow Enterprise",
                "domains": "https://stackoverflow.com/teams/create/free"
              },
              {
                "id": "statista",
                "name": "Statista",
                "domains": "https://www.statista.com/"
              },
              {
                "id": "storyful",
                "name": "Storyful",
                "domains": "https://video.storyful.com/site/login"
              },
              {
                "id": "storyline",
                "name": "Storyline",
                "domains": "https://portal.storylinellc.com/users/sign_in"
              },
              {
                "id": "sumo",
                "name": "Sumo",
                "domains": "sumo.com"
              },
              {
                "id": "surveymonkey",
                "name": "SurveyMonkey",
                "domains": "surveymonkey.com"
              },
              {
                "id": "talentlink",
                "name": "Talentlink",
                "domains": "talentlink.com.au"
              },
              {
                "id": "talkwalker",
                "name": "Talkwalker",
                "domains": "https://www.talkwalker.com/"
              },
              {
                "id": "techsmith",
                "name": "Techsmith",
                "domains": "techsmith.com"
              },
              {
                "id": "teladoc",
                "name": "Teladoc",
                "domains": ""
              },
              {
                "id": "the_athletic",
                "name": "The Athletic",
                "domains": "theathletic.com"
              },
              {
                "id": "the_wall_street_journal",
                "name": "The Wall Street Journal",
                "domains": "https://www.wsj.com/,https://sso.accounts.dowjones.com/"
              },
              {
                "id": "thefa_faplayer",
                "name": "FA Player",
                "domains": "faplayer.thefa.com"
              },
              {
                "id": "threatconnect",
                "name": "Threatconnect",
                "domains": "https://app.threatconnect.com/"
              },
              {
                "id": "tiktok",
                "name": "TikTok",
                "domains": "tiktok.com"
              },
              {
                "id": "tiktok_ads",
                "name": "TikTok Ads",
                "domains": ""
              },
              {
                "id": "tiktok_business",
                "name": "TikTok Business",
                "domains": ""
              },
              {
                "id": "travelperk",
                "name": "TravelPerk",
                "domains": "travelperk.com"
              },
              {
                "id": "trello",
                "name": "Trello",
                "domains": "trello.com"
              },
              {
                "id": "trustpilot_business",
                "name": "Trustpilot Business",
                "domains": ""
              },
              {
                "id": "tumblr",
                "name": "Tumblr",
                "domains": "tumblr.com"
              },
              {
                "id": "twitch",
                "name": "Twitch",
                "domains": "twitch.com,twitch.tv"
              },
              {
                "id": "twitter",
                "name": "Twitter",
                "domains": "twitter.com"
              },
              {
                "id": "typeform",
                "name": "Typeform",
                "domains": "www.typeform.com,typeform.com"
              },
              {
                "id": "udemy",
                "name": "Udemy",
                "domains": "https://www.udemy.com/"
              },
              {
                "id": "unmanaged",
                "name": "New app or service",
                "domains": ""
              },
              {
                "id": "usertesting",
                "name": "UserTesting",
                "domains": "usertesting.com/"
              },
              {
                "id": "victorops",
                "name": "Victorops",
                "domains": "portal.victorops.com"
              },
              {
                "id": "vimeo",
                "name": "Vimeo",
                "domains": "vimeo.com"
              },
              {
                "id": "vk",
                "name": "VK",
                "domains": "vk.com"
              },
              {
                "id": "volusion",
                "name": "Volusion",
                "domains": "https://www.volusion.com/"
              },
              {
                "id": "washingtonpost",
                "name": "Washington Post",
                "domains": "washingtonpost.com"
              },
              {
                "id": "wayleadr",
                "name": "Wayleadr",
                "domains": "wayleadr.com"
              },
              {
                "id": "webflow",
                "name": "Webflow",
                "domains": "webflow.com"
              },
              {
                "id": "weebly",
                "name": "Weebly",
                "domains": "weebly.com"
              },
              {
                "id": "wetransfer",
                "name": "WeTransfer",
                "domains": "wetransfer.com"
              },
              {
                "id": "whatsapp",
                "name": "Whatsapp",
                "domains": "whatsapp.com"
              },
              {
                "id": "whimsical",
                "name": "Whimsical",
                "domains": "whimsical.com"
              },
              {
                "id": "wipster",
                "name": "Wipster",
                "domains": "https://www.wipster.io/"
              },
              {
                "id": "wistia",
                "name": "Wistia",
                "domains": "https://auth.wistia.com/session/new"
              },
              {
                "id": "wistia_tenant",
                "name": "Wistia tenant",
                "domains": "wistia.com"
              },
              {
                "id": "workplace",
                "name": "workplace",
                "domains": "https://work.workplace.com/"
              },
              {
                "id": "wrike",
                "name": "Wrike",
                "domains": "wrike.com"
              },
              {
                "id": "xactly",
                "name": "Xactly",
                "domains": "xactlycorp.com"
              },
              {
                "id": "xmatters",
                "name": "xMatters",
                "domains": "https://www.xmatters.com/"
              },
              {
                "id": "yelp_ads",
                "name": "Yelp_Ads",
                "domains": "https://biz.yelp.com/login"
              },
              {
                "id": "youtube_tv",
                "name": "Youtube TV",
                "domains": "tv.youtube.com,google.com"
              },
              {
                "id": "zapier",
                "name": "Zapier",
                "domains": "https://zapier.com/app/login"
              },
              {
                "id": "zendesk",
                "name": "Zendesk",
                "domains": "https://www.zendesk.com/"
              },
              {
                "id": "zeplin",
                "name": "Zeplin",
                "domains": "zeplin.io"
              },
              {
                "id": "ziprecruiter",
                "name": "Ziprecruiter",
                "domains": "https://www.ziprecruiter.com/login?realm=members"
              },
              {
                "id": "zoho",
                "name": "Zoho",
                "domains": "zoho.com,www.zoho.com"
              },
              {
                "id": "zoom",
                "name": "Zoom",
                "domains": "zoom.com,zoom.us"
              },
              {
                "id": "zoominfo",
                "name": "Zoominfo",
                "domains": "https://login.zoominfo.com/"
              },
              {
                "id": "zuora",
                "name": "Zuora",
                "domains": "https://www.zuora.com/apps/newlogin.do"
              }
        ],
      })
    res.json(nuevapp);
  } catch (error) {
    res.status(500).json({ error: `Error al crear app ${error}` });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
