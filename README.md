# salequick-dashboards
Repository showing example UI (some unrelated JS) for the new SaleQuick dashboard pages.\
The colors, layout, etc. was eyeballed and replicated, not an exact copy of the SQ HTML. Please just reference the main elements, those are the only important elements.\
Each of the html files contains comments explaining the element, data source if necessary, which API to use, etc.\
**The navigation menu was used to link the other dashboards. Obviously this is not how it will work on the actual website but you can click between the other sites that way.** 
- Dashboard for Company Overview
- Merchants for Merchant Breakdown
- Payments for Payments Breakdown
- Marketing for Sales and Marketing Overview
- Dashboard MGMT will be the another subtab to manage certain dashboard elements


## Important Note
The default date range should be **month-to-date.**\
Admins should be able to use date filters like current dashboard system.\
Comments included on how this changes data.\


## Company Overview (index.html)
Name subtab in SQ Dashboard section as "Company Overview".\
Replaces the current /dashboard page.\
Contains broad KPIs which are broken down in the other dashboard pages.


## Merchant Breakdown (merchant.html)
Name subtab in SQ Dashboard section as "Merchant Breakdown".\
Replaces the current /dashboard/approved_list page.\
Contains KPIs and functuionality relating specifically to merchants.\
**Note:** This page does not need a date filter... It is just totals.


## Payments Breakdown  (payments.html)
Name subtab in SQ Dashboard section as "Payments Breakdown".\
New page. Contains KPIs and data relating to payments, payment sources, etc.


## Sales and Marketing Overview (sales-marketing.html)
Name subtab in SQ Dashboard section as "Sales and Marketing".\
New page. Contains information via APIs from JustCall and Zoho. Explained in the file.
- [Zoho API Reference] (https://www.zoho.com/developer/rest-api.html)
- [JustCall API Reference] (https://developer.justcall.io/reference/authentication)