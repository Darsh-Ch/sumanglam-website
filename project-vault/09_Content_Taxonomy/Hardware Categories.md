# Hardware Categories

## Purpose

Defines V1 hardware category taxonomy and associated brands.

## Categories And Brands

| Category | Associated brands |
| -------- | ----------------- |
| Furniture Fittings | Hettich, Hafele, Blum, Dorset |
| Handles | Godrej, Dorset, Hafele |
| Hinges | Hettich, Blum, Hafele, Brass Barony |
| Locks & Security | Godrej, Yale, Dorset |
| Digital Locks | Godrej, Yale, Dorset |
| Safes | Godrej, Yale |
| Door Controls | Godrej, Yale, Dorset |
| Architectural Hardware | Hettich, Hafele |
| Sliding Systems | Hettich, Hafele |
| Kitchen Accessories | Hafele, Hettich, Spitze, Everyday |
| Wire Baskets | Everyday |
| Brass Accessories | Brass Barony |

## Implementation Notes

* Categories map to [[Database - product_categories]].
* Products can belong to multiple categories through [[Database - product_category_mappings]].
* Avoid adding categories unless multiple products exist, customer demand exists, and long-term relevance is expected.

## Linked Notes

* [[Hardware And Appliances]]
* [[Product Category]]
* [[Product Brands]]
* [[API - Products]]

## Source Trace

Source files: `06-content-model.md`, `15-content-taxonomy.md`.
