# VentureLabs

**VentureLabs Reconciliation Workbench** compares two business CSV exports and produces a reviewable exception report.

## What it does

- Parses CSV files in the browser.
- Matches records using a shared column.
- Flags records missing from either source.
- Flags duplicate and blank matching keys.
- Compares shared fields and lists value mismatches.
- Exports exceptions to a separate CSV report.
- Includes sample data to test the workflow without uploading business data.

## Run locally

Open `index.html` in a modern browser. No build step, dependencies, API keys, or server are required.

Or deploy the repository as a static site with GitHub Pages or Cloudflare Pages. Set the build command to empty and the output directory to the repository root.

## Important behavior and limits

- All file parsing and comparison run client-side in the browser. This page contains no upload endpoint or analytics integration.
- CSV files are limited to 15 MB in this prototype.
- The matching key is selected from shared column names. Rename headers in one of the exports if the key columns use different names.
- When a key appears more than once, the report flags it and compares the first occurrence only. Resolve duplicate keys before relying on field comparisons for those records.
- Values are compared as text after trimming surrounding whitespace. Key normalization is configurable; field values are not coerced into numeric or date types.
- This is a decision-support tool, not an accounting system. Review exception evidence and source records before changing payments, inventory, or financial records.

## Test it

1. Open the app.
2. Click **Load sample** on both source cards.
3. Click **Run reconciliation**.
4. Review the mismatches, missing records, duplicate keys, and matched records.
5. Export the exception report.

## Project status

An early static prototype. It does not connect to Shopify, an ERP, accounting software, or a payment provider. Integration, access controls, audit logging, and production validation are not included.
