# @n8n-dev/n8n-nodes-amazonaws

![amazonaws Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-amazonaws.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-amazonaws)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing amazonaws API integrations by hand.**

Every time you connect n8n to amazonaws, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to amazonaws took 5 minutes, not half a day?**

This node gives you **1+ resources** out of the box: **Default**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-amazonaws
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-amazonaws`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **amazonaws API** → paste your API key
3. Drag the **amazonaws** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Default | Put associate alias 2020 05 31, Post copy distribution 2020 05 31, Post create cache policy 2020 05 31, Get list cache policies 2020 05 31, Post create cloud front origin access identity 2020 05 31, Get list cloud front origin access identities 2020 05 31, Post create continuous deployment policy 2020 05 31, Get list continuous deployment policies 2020 05 31, Post create distribution 2020 05 31, Get list distributions 2020 05 31, Post create distribution with tags 2020 05 31, Post create field level encryption config 2020 05 31, Get list field level encryption configs 2020 05 31, Post create field level encryption profile 2020 05 31, Get list field level encryption profiles 2020 05 31, Post create function 2020 05 31, Get list functions 2020 05 31, Post create invalidation 2020 05 31, Get list invalidations 2020 05 31, Post create key group 2020 05 31, Get list key groups 2020 05 31, Post create monitoring subscription 2020 05 31, Delete monitoring subscription 2020 05 31, Get monitoring subscription 2020 05 31, Post create origin access control 2020 05 31, Get list origin access controls 2020 05 31, Post create origin request policy 2020 05 31, Get list origin request policies 2020 05 31, Post create public key 2020 05 31, Get list public keys 2020 05 31, Post create realtime log config 2020 05 31, Get list realtime log configs 2020 05 31, Post create response headers policy 2020 05 31, Get list response headers policies 2020 05 31, Post create streaming distribution 2020 05 31, Get list streaming distributions 2020 05 31, Post create streaming distribution with tags 2020 05 31, Delete cache policy 2020 05 31, Get cache policy 2020 05 31, Put update cache policy 2020 05 31, Delete cloud front origin access identity 2020 05 31, Get cloud front origin access identity 2020 05 31, Delete continuous deployment policy 2020 05 31, Get continuous deployment policy 2020 05 31, Put update continuous deployment policy 2020 05 31, Delete distribution 2020 05 31, Get distribution 2020 05 31, Delete field level encryption config 2020 05 31, Get field level encryption 2020 05 31, Delete field level encryption profile 2020 05 31, Get field level encryption profile 2020 05 31, Delete function 2020 05 31, Put update function 2020 05 31, Delete key group 2020 05 31, Get key group 2020 05 31, Put update key group 2020 05 31, Delete origin access control 2020 05 31, Get origin access control 2020 05 31, Delete origin request policy 2020 05 31, Get origin request policy 2020 05 31, Put update origin request policy 2020 05 31, Delete public key 2020 05 31, Get public key 2020 05 31, Post delete realtime log config 2020 05 31, Delete response headers policy 2020 05 31, Get response headers policy 2020 05 31, Put update response headers policy 2020 05 31, Delete streaming distribution 2020 05 31, Get streaming distribution 2020 05 31, Get describe function 2020 05 31, Get cache policy config 2020 05 31, Get cloud front origin access identity config 2020 05 31, Put update cloud front origin access identity 2020 05 31, Get continuous deployment policy config 2020 05 31, Get distribution config 2020 05 31, Put update distribution 2020 05 31, Get field level encryption config 2020 05 31, Put update field level encryption config 2020 05 31, Get field level encryption profile config 2020 05 31, Put update field level encryption profile 2020 05 31, Get function 2020 05 31, Get invalidation 2020 05 31, Get key group config 2020 05 31, Get origin access control config 2020 05 31, Put update origin access control 2020 05 31, Get origin request policy config 2020 05 31, Get public key config 2020 05 31, Put update public key 2020 05 31, Post get realtime log config 2020 05 31, Get response headers policy config 2020 05 31, Get streaming distribution config 2020 05 31, Put update streaming distribution 2020 05 31, Get list conflicting aliases 2020 05 31, Get list distributions by cache policy id 2020 05 31, Get list distributions by key group 2020 05 31, Get list distributions by origin request policy id 2020 05 31, Post list distributions by realtime log config 2020 05 31, Get list distributions by response headers policy id 2020 05 31, Get list distributions by web acl id 2020 05 31, Get list tags for resource 2020 05 31, Post publish function 2020 05 31, Post tag resource 2020 05 31, Post test function 2020 05 31, Post untag resource 2020 05 31, Put update distribution with staging config 2020 05 31, Put update realtime log config 2020 05 31 |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from amazonaws docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official amazonaws OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **amazonaws** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the amazonaws API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
