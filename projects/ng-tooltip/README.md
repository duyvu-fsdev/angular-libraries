## ng-tooltip

### Overview

#### ng-tooltip is a versatile and customizable tooltip library for Angular and Ionic/Angular applications. Its key feature is its ability to reposition itself dynamically when overflowing the screen.

##

### Features

**- Dynamic positioning: Automatically adjusts when overflowing screen boundaries.**

**- Customizable styles: Modify styles using CSS variables or custom classes.**

**- Seamless integration: Works well with Angular and Ionic applications.**

##

### Installation

**Run the following command to install the library**

```bash
npm install @duyvu-fsdev/ng-tooltip
```

#### _If you encounter a dependency conflict with the required version of @angular/common, you can fix it by:_

##### _Upgrading @angular/common:_

```bash
ng update @angular/core @angular/cli
```

##### _Or using the --legacy-peer-deps flag if upgrading Angular is not possible:_

```bash
npm install @duyvu-fsdev/ng-tooltip --legacy-peer-deps
```

##

### Usage

**1. Import the module**

##### Add TooltipModule to your module:

```typescript
/* *.module.ts */

import { TooltipModule } from '@duyvu-fsdev/ng-tooltip';

@NgModule({
  imports: [..., TooltipModule],
})

export class YourModule {}
```

**2. Add the tooltip to your template**

##### Template Example:

```html
/* *.html */

<ng-tooltip [option]="tooltipOption">
  <host-element><!-- content --></host-element>
</ng-tooltip>
```

##### TypeScript Example:

```typescript
// *.ts

import { Option } from '@duyvu-fsdev/ng-tooltip';
...

export class YourComponent {
 ...
 tooltipOption: Option = {
  position: 'bottom',
  text: 'Hello, this is a tooltip!',
  class: 'custom-tooltip'
 };
}
```

##

### CSS Configuration

**1. Import default styles** **[_important_]**

```json
/* angular.json */

"styles": [
 ...,
 "node_modules/@duyvu-fsdev/ng-tooltip/styles/ng-tooltip.component.scss"
]
```

or

```scss
/* global.scss */

@import "node_modules/@duyvu-fsdev/ng-tooltip/styles/ng-tooltip.component.scss";
```

**2. Customize using CSS variables**

##### Modify variables directly in global.scss to change the tooltip's appearance globally

```scss
/* global.scss */

ng-tooltip {
  --tooltip-background: #fff;
  --tooltip-color: #000;
  --tooltip-border-radius: 4px;
  --tooltip-padding: 8px;
  --tooltip-width: auto;
  --tooltip-height: auto;
}
```

##### Pass a class name through option.class and define its styles in your global CSS

```bash
class: 'custom-css'
```

```scss
/* global.scss */

.custom-css {
  background: #f00;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
}
```

##

### Demo

(updating...)

##

#### License

[MIT](https://choosealicense.com/licenses/mit/)

##

### Author

##### Developed and maintained by [duyvu-fsdev](https://github.com/duyvu-fsdev)
