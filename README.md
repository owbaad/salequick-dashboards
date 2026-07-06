# salequick-dashboards
Repository showing example UI (some JS) for the new SaleQuick dashboard pages.
The colors, layout, etc. was eyeballed and replicated, not an exact copy of the SQ DOM. Please just reference the main elements, those are the only important elements.
Each of the html files contains comments explaining the element, data source if necessary, which API to use, etc.


## Company Overview (overview.html)
Name subtab in SQ nav as "Company Overview".
Replaces the current /dashboard page. 
Contains broad KPIs which are broken down in the other dashboard pages.


## Merchant Breakdown (merchants.html)
Name subtab in SQ nav as "Merchants Breakdown".
Replaces the current /dashboard/approved_list page.
Contains KPIs and functuionality relating specifically to merchants.


## Payment Breakdown  (payments.html)
Name subtab in SQ nav as "Payments Breakdown".
New page. Contains KPIs and data relating to payments, payment sources, etc.


## Sales and Marketing Dashboard (sales-marketing.html)
Name subtab in SQ nav as "Sales and Marketing".
New page. Contains information via APIs from JustCall and Zoho. Explained in the file.
- [Zoho API Reference] (https://www.zoho.com/developer/rest-api.html)
- [JustCall API Reference] (https://developer.justcall.io/reference/authentication)