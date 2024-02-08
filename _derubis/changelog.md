--- 
layout: Prototype-TableofContents-v2
name: Read Me | Change Log
uri: root/
---
# Change Log
## Grid classes altered
    .col-x_1 => .column-start_1
    .grid-columns_x => columns_x
    + added column-start-span_x
    + added columns_all column start and end stretches to the full width of the defined grid

## Grid Structures reconfigured to not use *classes* but to use *attributes*
    + added grid-template
    + added grid-area
    - removal of class names that corrisponed to it

### Grid templates
    + app-frame
        *grid-area* attribute:
        + app-menu => left hand area for the menu. size changes with the inclusion of `expanded` on the frame
        + app-page => full right side of the frame
        + app-breadcrumb => top area of the app-page area.
        + app-branding => synonym of the app-breadcrumb. usefull if you are removing the breadcrumb on pages like home.
        + app-footer => last slot within the app-page zone.
        + app-content => The area of app-page that excludes the breadcrumb an dfooter area.
    + breadcrumb
        *grid-area* attribute:
        + back-btn
        + breadcrubm-list
    + page => simple stack of rows that divides the page
        *grid-area* attribute:
        + page => everything
        + header => first content
        + content => middle content
        + content-primary => split of content comes first
        + content-secondary => plit of content comes second
    + bucket => this is a full container within a space. 

## Switching to Font Awesome 6 Javascript + SVG
    This improves the masking and stacking icons and future proofs.