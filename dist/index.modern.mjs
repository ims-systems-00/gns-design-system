import { Container, Col, Row, Navbar, NavbarBrand, NavbarText, NavbarToggler, Nav, NavItem, NavLink, Breadcrumb, BreadcrumbItem, Button, ButtonDropdown, ButtonGroup, ButtonToggle, ButtonToolbar, CloseButton, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown, UncontrolledDropdown, Fade, Accordion, AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion, Badge, Card, CardBody, CardColumns, CardDeck, CardGroup, CardFooter, CardHeader, CardImgOverlay, CardTitle, CardSubtitle, CardImg, CardLink, CardText, Carousel, UncontrolledCarousel, CarouselControl, CarouselCaption, CarouselItem, CarouselIndicators, Popover, PopperContent, PopperTargetHelper, PopoverHeader, PopoverBody, UncontrolledPopover, Modal, ModalBody, ModalFooter, ModalHeader, UncontrolledTooltip, Table as Table$2, InputGroup, Input, List, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, ListInlineItem, Form, FormFeedback, FormText, FormGroup, InputGroupText, Label, Media, Offcanvas, OffcanvasBody, OffcanvasHeader, Spinner, Progress, Pagination as Pagination$1, PaginationItem, PaginationLink, TabContent, TabPane, Alert, UncontrolledAlert, Toast, ToastBody, ToastHeader, Collapse, UncontrolledCollapse, Placeholder, PlaceholderButton } from 'reactstrap';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useState, useEffect, useMemo, useRef, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTable, useSortBy, useExpanded, usePagination as usePagination$1, useResizeColumns, useFlexLayout } from 'react-table';
import ReactSelect from 'react-select';
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import { useDropzone } from 'react-dropzone';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Mousewheel, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import * as yup from 'yup';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

Object.assign({}, Container.prototype.props);

/**
 *
 * @param {ContainerBaseProps} props
 * @returns
 */
const ContainerBase = props => {
  return /*#__PURE__*/jsx(Container, _extends({}, props, {
    children: props.children
  }));
};
ContainerBase.propTypes = _extends({}, Container.propTypes && Container.propTypes);

Object.assign({}, Col.prototype.props);

/**
 *
 * @param {ColProps} props
 * @returns
 */
const ColBase = props => {
  return /*#__PURE__*/jsx(Col, _extends({}, props, {
    children: props.children
  }));
};
ColBase.propTypes = _extends({}, Col.propTypes && Col.propTypes);

Object.assign({}, Row.prototype.props);

/**
 *
 * @param {RowProps} props
 * @returns
 */
const RowBase = props => {
  return /*#__PURE__*/jsx(Row, _extends({}, props, {
    children: props.children
  }));
};
RowBase.propTypes = _extends({}, Row.propTypes && Row.propTypes);

const _excluded$13 = ["children"];
Object.assign({}, Navbar.prototype.props);

/**
 *
 * @param {NavbarBaseProps} props
 * @returns
 */

const NavBarBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$13);
  return /*#__PURE__*/jsx(Navbar, _extends({}, rest, {
    children: children
  }));
};
NavBarBase.propTypes = _extends({}, Navbar.propTypes && Navbar.propTypes);

const _excluded$12 = ["children"];
Object.assign({}, NavbarBrand.prototype.props);

/**
 *
 * @param {NavbarBrandBaseProps} props
 * @returns
 */

const NavbarBrandBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$12);
  return /*#__PURE__*/jsx(NavbarBrand, _extends({}, rest, {
    children: children
  }));
};
NavbarBrandBase.propTypes = _extends({}, NavbarBrand.propTypes && NavbarBrand.propTypes);

const _excluded$11 = ["children"];
Object.assign({}, NavbarText.prototype.props);

/**
 *
 * @param {NavbarTextBaseProps} props
 * @returns
 */

const NavbarTextBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$11);
  return /*#__PURE__*/jsx(NavbarText, _extends({}, rest, {
    children: children
  }));
};
NavbarTextBase.propTypes = _extends({}, NavbarText.propTypes && NavbarText.propTypes);

const _excluded$10 = ["children"];
Object.assign({}, NavbarToggler.prototype.props);

/**
 *
 * @param {NavbarTogglerBaseProps} props
 * @returns
 */

const NavbarTogglerBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$10);
  return /*#__PURE__*/jsx(NavbarToggler, _extends({}, rest, {
    children: children
  }));
};
NavbarTogglerBase.propTypes = _extends({}, NavbarToggler.propTypes && NavbarToggler.propTypes);

const _excluded$$ = ["children", "variant"];
const NavBase = _ref => {
  let {
      children,
      variant = "primary"
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$$);
  Object.assign({
    variant: PropTypes.oneOf(["primary", "secondary", "outline"])
  }, Nav.prototype.props);

  /**
   *
   * @param {NavBaseProps} props
   * @returns
   */
  //variant="primary"
  //variant="secondary"
  //variant="outline"
  return /*#__PURE__*/jsx(Nav, _extends({
    className: classNames(`${rest.className || ""}`, {
      "nav-tabs-primary": variant === "primary",
      "nav-tabs-secondary": variant === "secondary",
      "nav-tabs-outline": variant === "outline"
    })
  }, rest, {
    children: children
  }));
};
NavBase.propTypes = _extends({
  variant: PropTypes.oneOf(["primary", "secondary", "outline"])
}, Nav.propTypes && Nav.propTypes);

const _excluded$_ = ["children"];
Object.assign({}, NavItem.prototype.props);

/**
 *
 * @param {NavItemProps} props
 * @returns
 */

const NavItemBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$_);
  return /*#__PURE__*/jsx(NavItem, _extends({}, rest, {
    children: children
  }));
};
NavItemBase.propTypes = _extends({}, NavItem.propTypes && NavItem.propTypes);

const _excluded$Z = ["children"];
Object.assign({}, NavLink.prototype.props);

/**
 *
 * @param {NavLinkProps} props
 * @returns
 */

const NavLinkBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$Z);
  return /*#__PURE__*/jsx("span", _extends({
    className: classNames(`nav-link ${rest.className}`, {
      active: rest.active
    })
  }, rest, {
    children: children
  }));
};
NavLinkBase.propTypes = _extends({}, NavLink.propTypes && NavLink.propTypes);

const _excluded$Y = ["children"];
var _Breadcrumb$prototype;
Object.assign({}, (_Breadcrumb$prototype = Breadcrumb.prototype) == null ? void 0 : _Breadcrumb$prototype.props);

/**
 * @param {BreadcrumbBaseProps} props
 * @returns
 * */

const BreadcrumbBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$Y);
  return /*#__PURE__*/jsx(Breadcrumb, _extends({}, rest, {
    children: children
  }));
};
BreadcrumbBase.propTypes = _extends({}, Breadcrumb.propTypes && Breadcrumb.propTypes);

const _excluded$X = ["children"];
var _BreadcrumbItem$proto;
Object.assign({}, (_BreadcrumbItem$proto = BreadcrumbItem.prototype) == null ? void 0 : _BreadcrumbItem$proto.props);

/**
 * @param {BreadcrumbItemBaseProps} props
 * @returns
 * */

const BreadcrumbItemBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$X);
  return /*#__PURE__*/jsx(BreadcrumbItem, _extends({}, rest, {
    children: children
  }));
};
BreadcrumbItemBase.propTypes = _extends({}, BreadcrumbItem.propTypes && BreadcrumbItem.propTypes);

Object.assign({
  leftIcon: "",
  rightIcon: ""
}, Button.prototype.props);

/**
 *
 * @param {ButtonBaseProps} props
 * @returns
 */
const ButtonBase = props => {
  return /*#__PURE__*/jsxs(Button, _extends({}, props, {
    children: [props.leftIcon ? /*#__PURE__*/jsx("i", {
      className: classNames(props.leftIcon, "me-2")
    }) : null, props.children, props.rightIcon ? /*#__PURE__*/jsx("i", {
      className: classNames(props.rightIcon, "ms-2")
    }) : null]
  }));
};
ButtonBase.propTypes = _extends({
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string
}, Button.propTypes && Button.propTypes);

const _excluded$W = ["children"];
var _ButtonDropdown$proto;
Object.assign({}, (_ButtonDropdown$proto = ButtonDropdown.prototype) == null ? void 0 : _ButtonDropdown$proto.props);

/**
 *
 * @param {ButtonDropdownBaseProps} props
 * @returns
 */

const ButtonDropdownBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$W);
  return /*#__PURE__*/jsx(ButtonDropdown, _extends({}, rest, {
    children: children
  }));
};
ButtonDropdownBase.propTypes = _extends({}, ButtonDropdown.propTypes && ButtonDropdown.propTypes);

const _excluded$V = ["children"];
var _ButtonGroup$prototyp;
Object.assign({}, (_ButtonGroup$prototyp = ButtonGroup.prototype) == null ? void 0 : _ButtonGroup$prototyp.props);

/**
 *
 * @param {ButtonGroupBaseProps} props
 * @returns
 */

const ButtonGroupBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$V);
  return /*#__PURE__*/jsx(ButtonGroup, _extends({}, rest, {
    children: children
  }));
};
ButtonGroupBase.propTypes = _extends({}, ButtonGroup.propTypes && ButtonGroup.propTypes);

const _excluded$U = ["children"];
var _ButtonToggle$prototy;
Object.assign({}, (_ButtonToggle$prototy = ButtonToggle.prototype) == null ? void 0 : _ButtonToggle$prototy.props);

/**
 *
 * @param {ButtonToggleBaseProps} props
 * @returns
 */

const ButtonToggleBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$U);
  return /*#__PURE__*/jsx(ButtonToggle, _extends({}, rest, {
    children: children
  }));
};
ButtonToggleBase.propTypes = _extends({}, ButtonToggle.propTypes && ButtonToggle.propTypes);

const _excluded$T = ["children"];
var _ButtonToolbar$protot;
Object.assign({}, (_ButtonToolbar$protot = ButtonToolbar.prototype) == null ? void 0 : _ButtonToolbar$protot.props);

/**
 *
 * @param {ButtonToolbarBaseProps} props
 * @returns
 */
const ButtonToolbarBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$T);
  return /*#__PURE__*/jsx(ButtonToolbar, _extends({}, rest, {
    children: children
  }));
};
ButtonToolbarBase.propTypes = _extends({}, ButtonToolbar.propTypes && ButtonToolbar.propTypes);

const _excluded$S = ["children"];
var _CloseButton$prototyp;
Object.assign({}, (_CloseButton$prototyp = CloseButton.prototype) == null ? void 0 : _CloseButton$prototyp.props);

/**
 *
 * @param {CloseButtonBaseProps} props
 * @returns
 */

const CloseButtonBase = _ref => {
  let {
      children
    } = _ref;
    _objectWithoutPropertiesLoose(_ref, _excluded$S);
  return /*#__PURE__*/jsx(CloseButton, {
    children: children
  });
};
CloseButtonBase.propTypes = _extends({}, CloseButton.propTypes && CloseButton.propTypes);

Object.assign({}, Dropdown.prototype.props);

/**
 *
 * @param {DropdownBaseProps} props
 * @returns
 */
const DropdownBase = _ref => {
  let props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/jsx(Dropdown, _extends({}, props, {
    children: props.children
  }));
};
DropdownBase.propTypes = _extends({}, Dropdown.propTypes && Dropdown.propTypes);

Object.assign({}, DropdownItem.prototype.props);

/**
 *
 * @param {DropdownItemBaseProps} props
 * @returns
 */
const DropdownItemBase = _ref => {
  let props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/jsx(DropdownItem, _extends({}, props, {
    children: props.children
  }));
};
DropdownItemBase.propTypes = _extends({}, DropdownItem.propTypes && DropdownItem.propTypes);

Object.assign({}, DropdownMenu.prototype.props);

/**
 *
 * @param {DropdownMenuBaseProps} props
 * @returns
 */
const DropdownMenuBase = _ref => {
  let props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/jsx(DropdownMenu, _extends({}, props, {
    children: props.children
  }));
};
DropdownMenuBase.propTypes = _extends({}, DropdownMenu.propTypes && DropdownMenu.propTypes);

Object.assign({}, DropdownToggle.prototype.props);

/**
 *
 * @param {DropdownToogleBaseProps} props
 * @returns
 */

const DropdownToogleBase = _ref => {
  let props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(DropdownToggle, _extends({}, props, {
      children: [props.startIcon && /*#__PURE__*/jsx("i", {
        className: classNames(props.startIcon, "me-2")
      }), props.children]
    }))
  });
};
DropdownToogleBase.propTypes = _extends({}, DropdownToggle.propTypes && DropdownToggle.propTypes);

const _excluded$R = ["children"];
var _UncontrolledButtonDr;
Object.assign({}, (_UncontrolledButtonDr = UncontrolledButtonDropdown.prototype) == null ? void 0 : _UncontrolledButtonDr.props);

/**
 *
 * @param {UncontrolledButtonDropdownBaseProps} props
 * @returns
 *
 */
const UncontrolledButtonDropdownBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$R);
  return /*#__PURE__*/jsx(UncontrolledButtonDropdown, _extends({}, rest, {
    children: children
  }));
};
UncontrolledButtonDropdownBase.propTypes = _extends({}, UncontrolledButtonDropdown.propTypes && UncontrolledButtonDropdown.propTypes);

const _excluded$Q = ["children"];
Object.assign({}, UncontrolledDropdown.prototype.props);

/**
 *
 * @param {UncontrolledDropdownBaseProps} props
 * @returns
 *
 *    */

const UncontrolledDropdownBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$Q);
  return /*#__PURE__*/jsx(UncontrolledDropdown, _extends({}, rest, {
    children: children
  }));
};
UncontrolledDropdownBase.propTypes = _extends({}, UncontrolledDropdown.propTypes && UncontrolledDropdown.propTypes);

const _excluded$P = ["children"];
var _Fade$prototype;
Object.assign({}, (_Fade$prototype = Fade.prototype) == null ? void 0 : _Fade$prototype.props);
const FadeBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$P);
  return /*#__PURE__*/jsx(Fade, _extends({}, rest, {
    children: children
  }));
};
FadeBase.propTypes = _extends({}, FadeBase.propTypes && FadeBase.propTypes);

const _excluded$O = ["children"];
var _Accordion$prototype;
Object.assign({}, (_Accordion$prototype = Accordion.prototype) == null ? void 0 : _Accordion$prototype.props);

/**
 * @param {AccordionBaseProps} props
 * @returns
 * */

const AccordionBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$O);
  return /*#__PURE__*/jsx(Accordion, _extends({}, rest, {
    children: children
  }));
};
AccordionBase.propTypes = _extends({}, Accordion.propTypes && Accordion.propTypes);

const _excluded$N = ["children"];
var _AccordionBody$protot;
Object.assign({}, (_AccordionBody$protot = AccordionBody.prototype) == null ? void 0 : _AccordionBody$protot.props);
/**
 * @param {AccordionBodyBaseProps} props
 * @returns
 * */

const AccordionBodyBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$N);
  return /*#__PURE__*/jsx(AccordionBody, _extends({}, rest, {
    children: children
  }));
};
AccordionBodyBase.propTypes = _extends({}, AccordionBody.propTypes && AccordionBody.propTypes);

const _excluded$M = ["children"];
var _AccordionHeader$prot;
Object.assign({}, (_AccordionHeader$prot = AccordionHeader.prototype) == null ? void 0 : _AccordionHeader$prot.props);

/**
 * @param {AccordionHeaderBaseProps} props
 * @returns
 * */

const AccordionHeaderBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$M);
  return /*#__PURE__*/jsx(AccordionHeader, _extends({}, rest, {
    children: children
  }));
};
AccordionHeaderBase.propTypes = _extends({}, AccordionHeader.propTypes && AccordionHeader.propTypes);

const _excluded$L = ["children"];
var _AccordionItem$protot;
Object.assign({}, (_AccordionItem$protot = AccordionItem.prototype) == null ? void 0 : _AccordionItem$protot.props);

/**
 * @param {AccordionItemBaseProps} props
 * @returns
 * */

const AccordionItemBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$L);
  return /*#__PURE__*/jsx(AccordionItem, _extends({}, rest, {
    children: children
  }));
};
AccordionItemBase.propTypes = _extends({}, AccordionItem.propTypes && AccordionItem.propTypes);

const _excluded$K = ["children"];
var _UncontrolledAccordio;
Object.assign({}, (_UncontrolledAccordio = UncontrolledAccordion.prototype) == null ? void 0 : _UncontrolledAccordio.props);

/**
 * @param {AccordionUncontrolledBaseProps} props
 * @returns
 * */

const UncontrolledAccordionBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$K);
  return /*#__PURE__*/jsx(UncontrolledAccordion, _extends({}, rest, {
    children: children
  }));
};
UncontrolledAccordionBase.propTypes = _extends({}, UncontrolledAccordion.propTypes && UncontrolledAccordion.propTypes);

const _excluded$J = ["children", "color", "outline", "fade"];
Object.assign({
  color: "",
  outline: "",
  fade: "",
  icon: ""
}, Badge.prototype.props);

/**
 *
 * @param {BadgeBaseProps} props
 * @returns
 */

const BadgeBase = _ref => {
  let {
      children,
      color,
      outline,
      fade
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$J);
  return /*#__PURE__*/jsx(Badge, _extends({
    color: color,
    className: classNames(rest.className, {
      "bg-secondary bg-pending": color === "pending",
      "badge-outline-primary": outline === "primary",
      "badge-outline-info": outline === "info",
      "badge-outline-secondary": outline === "secondary",
      "badge-outline-success": outline === "success",
      "badge-outline-danger": outline === "danger",
      "badge-outline-warning": outline === "warning",
      "badge-outline-light": outline === "light",
      "badge-outline-dark": outline === "dark",
      "badge-outline-pending": outline === "pending",
      "badge-fade-primary": fade === "primary",
      "badge-fade-info": fade === "info",
      "badge-fade-secondary": fade === "secondary",
      "badge-fade-success": fade === "success",
      "badge-fade-danger": fade === "danger",
      "badge-fade-warning": fade === "warning",
      "badge-fade-light": fade === "light",
      "badge-fade-dark": fade === "dark",
      "badge-fade-pending": fade === "pending"
    })
  }, rest, {
    children: children
  }));
};
BadgeBase.propTypes = _extends({
  color: PropTypes.string
}, Badge.propTypes && Badge.propTypes);

Object.assign({}, Card.prototype.props);

/**
 *
 * @param {CardBaseProps} props
 * @returns
 */
const CardBase = props => {
  return /*#__PURE__*/jsx(Card, _extends({
    className: classNames(props.className, {
      "card-variant-list ": props.variant === "list",
      "card-variant-active": props.variant === "active",
      "card-variant-active card-hover-none": props.variant === "active" && props.hover === false,
      "card-variant-outline": props.variant === "outline",
      "card-variant-outline card-hover-none": props.variant === "outline" && props.hover === false,
      "card-variant-primary": props.variant === "primary",
      "card-variant-primary card-hover-none": props.variant === "primary" && props.hover === false,
      "card-variant-secondary": props.variant === "secondary",
      "card-variant-secondary card-hover-none": props.variant === "secondary" && props.hover === false,
      "card-variant-light": props.variant === "light",
      "card-variant-light card-hover-none": props.variant === "light" && props.hover === false,
      "card-gradient card-gradient-success": props.variant === "gradient" && props.color === "success",
      "card-gradient card-gradient-primary": props.variant === "gradient" && props.color === "primary",
      "card-gradient card-gradient-danger": props.variant === "gradient" && props.color === "danger"
    })
  }, props, {
    children: props.children
  }));
};
CardBase.propTypes = _extends({}, Card.propTypes && Card.propTypes);

Object.assign({}, CardBody.prototype.props);

/**
 *
 * @param {CardBodyBaseProps} props
 * @returns
 */
const CardBodyBase = props => {
  return /*#__PURE__*/jsx(CardBody, _extends({}, props, {
    children: props.children
  }));
};
CardBodyBase.propTypes = _extends({}, CardBody.propTypes && CardBody.propTypes);

Object.assign({}, CardColumns.prototype.props);

/**
 *
 * @param {CardColumnsBaseProps} props
 * @returns
 */
const CardColumnsBase = props => {
  return /*#__PURE__*/jsx(CardColumns, _extends({}, props, {
    children: props.children
  }));
};
CardColumnsBase.propTypes = _extends({}, CardColumns.propTypes && CardColumns.propTypes);

Object.assign({}, CardDeck.prototype.props);

/**
 *
 * @param {CardDeckBaseProps} props
 * @returns
 */
const CardDeckBase = props => {
  return /*#__PURE__*/jsx(CardDeck, _extends({}, props, {
    children: props.children
  }));
};
CardDeckBase.propTypes = _extends({}, CardDeck.propTypes && CardDeck.propTypes);

Object.assign({}, CardGroup.prototype.props);

/**
 *
 * @param {CardGroupBaseProps} props
 * @returns
 */
const CardGroupBase = props => {
  return /*#__PURE__*/jsx(CardGroup, _extends({}, props, {
    children: props.children
  }));
};
CardGroupBase.propTypes = _extends({}, CardGroup.propTypes && CardGroup.propTypes);

Object.assign({}, CardFooter.prototype.props);

/**
 *
 * @param {CardFooterBaseProps} props
 * @returns
 */
const CardFooterBase = props => {
  return /*#__PURE__*/jsx(CardFooter, _extends({}, props, {
    children: props.children
  }));
};
CardFooterBase.propTypes = _extends({}, CardFooter.propTypes && CardFooter.propTypes);

Object.assign({}, CardHeader.prototype.props);

/**
 *
 * @param {CardHeaderBaseProps} props
 * @returns
 */
const CardHeaderBase = props => {
  return /*#__PURE__*/jsx(CardHeader, _extends({}, props, {
    children: props.children
  }));
};
CardHeaderBase.propTypes = _extends({}, CardHeader.propTypes && CardHeader.propTypes);

Object.assign({}, CardImgOverlay.prototype.props);

/**
 *
 * @param {CardImgOverlayBaseProps} props
 * @returns
 */
const CardImgOverlayBase = props => {
  return /*#__PURE__*/jsx(CardImgOverlay, _extends({}, props, {
    children: props.children
  }));
};
CardImgOverlayBase.propTypes = _extends({}, CardImgOverlay.propTypes && CardImgOverlay.propTypes);

Object.assign({}, CardTitle.prototype.props);

/**
 *
 * @param {CardTitleBaseProps} props
 * @returns
 */
const CardTitleBase = props => {
  return /*#__PURE__*/jsx(CardTitle, _extends({}, props, {
    children: props.children
  }));
};
CardTitleBase.propTypes = _extends({}, CardTitle.propTypes && CardTitle.propTypes);

Object.assign({}, CardSubtitle.prototype.props);

/**
 *
 * @param {CardSubtitleBaseProps} props
 * @returns
 */
const CardSubtitleBase = props => {
  return /*#__PURE__*/jsx(CardSubtitle, _extends({}, props, {
    children: props.children
  }));
};
CardSubtitleBase.propTypes = _extends({}, CardSubtitle.propTypes && CardSubtitle.propTypes);

Object.assign({}, CardImg.prototype.props);

/**
 *
 * @param {CardImgBaseProps} props
 * @returns
 */
const CardImgBase = props => {
  return /*#__PURE__*/jsx(CardImg, _extends({}, props, {
    children: props.children
  }));
};
CardImgBase.propTypes = _extends({}, CardImg.propTypes && CardImg.propTypes);

Object.assign({}, CardLink.prototype.props);

/**
 *
 * @param {CardLinkBaseProps} props
 * @returns
 */
const CardLinkBase = props => {
  return /*#__PURE__*/jsx(CardLink, _extends({}, props, {
    children: props.children
  }));
};
CardLinkBase.propTypes = _extends({}, CardLink.propTypes && CardLink.propTypes);

Object.assign({}, CardText.prototype.props);

/**
 *
 * @param {CardTextBaseProps} props
 * @returns
 */
const CardTextBase = props => {
  return /*#__PURE__*/jsx(CardText, _extends({}, props, {
    children: props.children
  }));
};
CardTextBase.propTypes = _extends({}, CardText.propTypes && CardText.propTypes);

Object.assign({}, Carousel.prototype.props);

/**
 *
 * @param {CarouselBaseProps} props
 * @returns {JSX.Element}
 */
const CarouselBase = props => {
  return /*#__PURE__*/jsx(Carousel, _extends({}, props, {
    children: props.children
  }));
};
CarouselBase.propTypes = _extends({}, Carousel.propTypes && Carousel.propTypes);

Object.assign({}, UncontrolledCarousel.prototype.props);

/**
 *
 * @param {UncontrolledCarouselBaseProps} props
 * @returns
 */
const UncontrolledCarouselBase = props => {
  return /*#__PURE__*/jsx(UncontrolledCarousel, _extends({}, props, {
    children: props.children
  }));
};
UncontrolledCarouselBase.propTypes = _extends({}, UncontrolledCarousel.propTypes && UncontrolledCarousel.propTypes);

Object.assign({}, CarouselControl.prototype.props);

/**
 *
 * @param {CarouselControlBaseProps} props
 * @returns
 */
const CarouselControlBase = props => {
  return /*#__PURE__*/jsx(CarouselControl, _extends({}, props, {
    children: props.children
  }));
};
CarouselControlBase.propTypes = _extends({}, CarouselControl.propTypes && CarouselControl.propTypes);

Object.assign({}, CarouselCaption.prototype.props);

/**
 *
 * @param {CarouselCaptionBaseProps} props
 * @returns
 */
const CarouselCaptionBase = props => {
  return /*#__PURE__*/jsx(CarouselCaption, _extends({}, props, {
    children: props.children
  }));
};
CarouselCaptionBase.propTypes = _extends({}, CarouselCaption.propTypes && CarouselCaption.propTypes);

Object.assign({}, CarouselItem.prototype.props);

/**
 *
 * @param {CarouselItemBaseProps} props
 * @returns
 */
const CarouselItemBase = props => {
  return /*#__PURE__*/jsx(CarouselItem, _extends({}, props, {
    children: props.children
  }));
};
CarouselItemBase.propTypes = _extends({}, CarouselItem.propTypes && CarouselItem.propTypes);

Object.assign({}, CarouselIndicators.prototype.props);

/**
 *
 * @param {CarouselIndicatorsBaseProps} props
 * @returns
 */
const CarouselIndicatorsBase = props => {
  return /*#__PURE__*/jsx(CarouselIndicators, _extends({}, props, {
    children: props.children
  }));
};
CarouselIndicatorsBase.propTypes = _extends({}, CarouselIndicators.propTypes && CarouselIndicators.propTypes);

Object.assign({}, Popover.prototype.props);

/**
 *
 * @param {PopoverBaseProps} props
 * @returns
 */
const PopoverBase = props => {
  return /*#__PURE__*/jsx(Popover, _extends({}, props, {
    children: props.children
  }));
};
PopoverBase.propTypes = _extends({}, Popover.propTypes && Popover.propTypes);

Object.assign({}, PopperContent.prototype.props);

/**
 *
 * @param {PopperContentBaseProps} props
 * @returns
 */
const PopperContentBase = props => {
  return /*#__PURE__*/jsx(PopperContent, _extends({}, props, {
    children: props.children
  }));
};
PopperContentBase.propTypes = _extends({}, PopperContent.propTypes && PopperContent.propTypes);

Object.assign({}, PopperTargetHelper.prototype.props);

/**
 *
 * @param {PopperTargetHelperBaseProps} props
 * @returns
 */
const PopperTargetHelperBase = props => {
  return /*#__PURE__*/jsx(PopperTargetHelper, _extends({}, props, {
    children: props.children
  }));
};
PopperTargetHelperBase.propTypes = _extends({}, PopperTargetHelper.propTypes && PopperTargetHelper.propTypes);

Object.assign({}, PopoverHeader.prototype.props);
/**
 *
 * @param {PopoverHeaderBaseProps} props
 * @returns
 */
const PopoverHeaderBase = props => {
  return /*#__PURE__*/jsx(PopoverHeader, _extends({}, props, {
    children: props.children
  }));
};
PopoverHeaderBase.propTypes = _extends({}, PopoverHeader.propTypes && PopoverHeader.propTypes);

Object.assign({}, PopoverBody.prototype.props);

/**
 *
 * @param {PopoverBodyBaseProps} props
 * @returns
 */
const PopoverBodyBase = props => {
  return /*#__PURE__*/jsx(PopoverBody, _extends({}, props, {
    children: props.children
  }));
};
PopoverBodyBase.propTypes = _extends({}, PopoverBody.propTypes && PopoverBody.propTypes);

Object.assign({}, UncontrolledPopover.prototype.props);

/**
 *
 * @param {UncontrolledPopoverBaseProps} props
 * @returns
 */
const UncontrolledPopoverBase = props => {
  return /*#__PURE__*/jsx(UncontrolledPopover, _extends({}, props, {
    children: props.children
  }));
};
UncontrolledPopoverBase.propTypes = _extends({}, UncontrolledPopover.propTypes && UncontrolledPopover.propTypes);

const _excluded$I = ["children"];
Object.assign({}, Modal.prototype.props);

/**
 *
 * @param {ModalBaseProps} props
 * @returns
 */

const ModalBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$I);
  return /*#__PURE__*/jsx(Modal, _extends({}, rest, {
    children: children
  }));
};
ModalBase.propTypes = _extends({}, Modal.propTypes && Modal.propTypes);

const _excluded$H = ["children"];
Object.assign({}, ModalBody.prototype.props);

/**
 *
 * @param {ModalBodyBaseProps} props
 * @returns
 */

const ModalBodyBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$H);
  return /*#__PURE__*/jsx(ModalBody, _extends({}, rest, {
    children: children
  }));
};
ModalBodyBase.propTypes = _extends({}, ModalBody.propTypes && ModalBody.propTypes);

const _excluded$G = ["children"];
Object.assign({}, ModalFooter.prototype.props);

/**
 *
 * @param {ModalFooterBaseProps} props
 * @returns
 */

const ModalFooterBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$G);
  return /*#__PURE__*/jsx(ModalFooter, _extends({}, rest, {
    children: children
  }));
};
ModalFooterBase.propTypes = _extends({}, ModalFooter.propTypes && ModalFooter.propTypes);

const _excluded$F = ["children"];
Object.assign({}, ModalHeader.prototype.props);

/**
 *
 * @param {ModalHeaderBaseProps} props
 * @returns
 */

const ModalHeaderBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$F);
  return /*#__PURE__*/jsx(ModalHeader, _extends({}, rest, {
    children: children
  }));
};
ModalHeaderBase.propTypes = _extends({}, ModalHeader.propTypes && ModalHeader.propTypes);

const _excluded$E = ["children"];
Object.assign({}, UncontrolledTooltip.prototype.props);

/**
 * @param {UncontrolledTooltipBaseProps} props
 * @returns
 * */

const UncontrolledTooltipBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$E);
  return /*#__PURE__*/jsx(UncontrolledTooltip, _extends({}, rest, {
    children: children
  }));
};
UncontrolledTooltipBase.propTypes = _extends({}, UncontrolledTooltip.propTypes && UncontrolledTooltip.propTypes);

Object.assign({}, Table$2.prototype.props);

/**
 *
 * @param {TableBaseProps} props
 * @returns
 */
const TableBase = props => {
  return /*#__PURE__*/jsx(Table$2, _extends({}, props, {
    children: props.children
  }));
};
TableBase.propTypes = _extends({}, Table$2.propTypes && Table$2.propTypes);

const _excluded$D = ["onRowClick", "active", "linear"],
  _excluded2$1 = ["onRowClick"];
const ImsSimpleTable = _ref => {
  let {
      onRowClick = () => {},
      active,
      linear
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$D);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const handleActiveRow = e => {
    const index = e.currentTarget.rowIndex - 1;
    setSelectedRow(index);
  };
  return /*#__PURE__*/jsxs(Table$2, _extends({
    hover: true
  }, props, {
    className: classNames(props.className, {
      "table-linear": linear
    }),
    children: [/*#__PURE__*/jsx("thead", {
      children: /*#__PURE__*/jsx("tr", {
        children: props.thead.map((prop, key) => {
          return /*#__PURE__*/jsx("th", {
            className: classNames("", {
              "text-right": props.thead.length - 1 === key
            }),
            children: prop.text
          }, key);
        })
      })
    }), /*#__PURE__*/jsx("tbody", {
      children: props.tbody.map((_ref2, key) => {
        let {
            onRowClick = function () {}
          } = _ref2,
          prop = _objectWithoutPropertiesLoose(_ref2, _excluded2$1);
        return /*#__PURE__*/jsxs("tr", {
          onClick: e => {
            handleActiveRow(e);
            onRowClick(e);
          },
          className: classNames({
            /** allow row active feature only if sepcified in the prop */
            "table-active": active && selectedRow === key
          }),
          children: [prop.data.map((data, k) => {
            return /*#__PURE__*/jsx("td", {
              className: classNames({
                [data.className]: data.className !== undefined
              }),
              children: data.item
            }, k);
          }), prop.actions && /*#__PURE__*/jsx("td", {
            className: "text-right",
            children: prop.actions
          })]
        }, key);
      })
    })]
  }));
};
ImsSimpleTable.propTypes = {
  thead: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    text: PropTypes.string.isRequired
  })).isRequired,
  tbody: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      className: PropTypes.string,
      item: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired
    })).isRequired,
    actions: PropTypes.node
  })).isRequired,
  active: PropTypes.bool
};

function useDebounce$1(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const FilterAndSearch$1 = ({
  onFilter: _onFilter = () => {},
  onSearch: _onSearch = () => {},
  filters: _filters = []
}) => {
  let [searchString, setSearchString] = React.useState("");
  const debouncedSearchString = useDebounce$1(searchString, 500);
  React.useEffect(() => {
    _onSearch({
      value: {
        clientSearch: debouncedSearchString
      }
    });
  }, [debouncedSearchString]);
  return /*#__PURE__*/jsxs(Row, {
    children: [/*#__PURE__*/jsx(Col, {
      md: "3",
      children: /*#__PURE__*/jsx(ReactSelect, {
        className: "react-select default m-0 w-100",
        classNamePrefix: "react-select",
        name: "singleSelect",
        onChange: value => {
          _onFilter(value);
        },
        defaultValue: _filters.find(item => item.default),
        options: _filters,
        placeholder: "Select filter"
      })
    }), /*#__PURE__*/jsx(Col, {
      md: "6",
      children: /*#__PURE__*/jsx(InputGroup, {
        children: /*#__PURE__*/jsx(Input, {
          onChange: e => setSearchString(e.currentTarget.value.toString()),
          placeholder: "Search item"
        })
      })
    })]
  });
};

const DOTS = '...';
const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({
    length
  }, (_, idx) => idx + start);
};
const usePagination = ({
  totalCount,
  pageSize,
  siblingCount: _siblingCount = 1,
  currentPage
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = _siblingCount + 5;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - _siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + _siblingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * _siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * _siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, _siblingCount, currentPage]);
  return paginationRange;
};

const Pagination = props => {
  const {
    onPageChange = () => {},
    totalCount = 0,
    siblingCount = 1,
    currentPage = 1,
    pageSize = 10
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange && onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange && onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsx("nav", {
      "aria-label": "Page navigation",
      children: /*#__PURE__*/jsxs("ul", {
        className: "pagination",
        children: [/*#__PURE__*/jsx("li", {
          className: "page-item",
          children: /*#__PURE__*/jsxs("button", {
            onClick: onPrevious,
            className: "page-link",
            "aria-label": "Next",
            children: [/*#__PURE__*/jsx("span", {
              "aria-hidden": "true",
              children: "\xAB"
            }), /*#__PURE__*/jsx("span", {
              className: "sr-only",
              children: "Previous"
            })]
          })
        }, "first-button"), paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) return /*#__PURE__*/jsx("li", {
            className: "pagination-item dots",
            children: "\u2026"
          }, DOTS + i);
          return /*#__PURE__*/jsx("li", {
            className: `page-item ${currentPage === pageNumber && ` active`}`,
            children: /*#__PURE__*/jsx("button", {
              className: "page-link",
              onClick: () => onPageChange(pageNumber),
              children: pageNumber
            })
          }, pageNumber);
        }), /*#__PURE__*/jsx("li", {
          className: "page-item",
          children: /*#__PURE__*/jsxs("button", {
            disabled: currentPage === lastPage,
            className: "page-link",
            onClick: onNext,
            "aria-label": "Next",
            children: [/*#__PURE__*/jsx("span", {
              "aria-hidden": "true",
              children: "\xBB"
            }), /*#__PURE__*/jsx("span", {
              className: "sr-only",
              children: "Next"
            })]
          })
        }, "next-button")]
      })
    })
  });
};

function Table$1({
  columns,
  data,
  renderRowSubComponent,
  rowProps = () => ({}),
  className = "-highlight -striped ",
  handleSearch = () => {},
  handleFilter = () => {},
  handlePagination = () => {},
  filters = [],
  pagination = {
    currentPage: 1,
    hasNextPage: true,
    hasPrevPage: false,
    nextPage: 2,
    prevPage: null,
    size: 10,
    totalPages: 2,
    totalResults: 17
  }
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: {
      expanded
    },
    visibleColumns
  } = useTable({
    columns,
    data,
    initialState: {
      pageSize: 10,
      pageIndex: 0
    }
  }, useSortBy, useExpanded, usePagination$1, useResizeColumns, useFlexLayout);
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs("div", {
      className: "ReactTable " + className,
      children: [/*#__PURE__*/jsx("div", {
        className: "pagination-top",
        children: /*#__PURE__*/jsx(FilterAndSearch$1, {
          filters: filters,
          onFilter: filter => handleFilter(filter),
          onSearch: search => handleSearch(search)
        })
      }), /*#__PURE__*/jsxs("table", _extends({}, getTableProps(), {
        className: "rt-table",
        children: [/*#__PURE__*/jsx("thead", {
          className: "rt-thead -header",
          children: headerGroups.map(headerGroup => /*#__PURE__*/jsx("tr", _extends({}, headerGroup.getHeaderGroupProps(), {
            className: "rt-tr",
            children: headerGroup.headers.map((column, key) => /*#__PURE__*/jsxs("th", _extends({}, column.getHeaderProps(column.getSortByToggleProps()), {
              className: classNames("rt-th rt-resizable-header", {
                "-cursor-pointer": headerGroup.headers.length - 1 !== key,
                "-sort-asc": column.isSorted && !column.isSortedDesc,
                "-sort-desc": column.isSorted && column.isSortedDesc
              }),
              children: [/*#__PURE__*/jsxs("div", {
                className: "rt-resizable-header-content",
                children: [column.render("Header"), /*#__PURE__*/jsx("div", _extends({}, column.getResizerProps(), {
                  className: classNames("col-resizer", {
                    " active": column.isResizing
                  })
                }))]
              }), /*#__PURE__*/jsx("div", {
                children: headerGroup.headers.length - 1 === key ? null : column.canFilter ? column.render("Filter") : null
              })]
            })))
          })))
        }), /*#__PURE__*/jsx("tbody", _extends({}, getTableBodyProps(), {
          className: "rt-tbody",
          children: page.map((row, i) => {
            var _row$getRowProps;
            prepareRow(row);
            const rowStyel = classNames("rt-tr", {
              " -odd": i % 2 === 0
            }, {
              " -even": i % 2 === 1
            });
            return /*#__PURE__*/jsxs(React.Fragment, {
              children: [/*#__PURE__*/jsx("tr", _extends({
                /**
                 * in the follwing we are muting row object and putting classNames
                 * this is a custom property added to get control from outside
                 */
                className: rowStyel
              }, row.getRowProps(rowProps(_extends({}, row, {
                className: rowStyel
              }))), {
                children: row.cells.map(cell => {
                  return /*#__PURE__*/jsx("td", _extends({}, cell.getCellProps(), {
                    className: "rt-td",
                    children: cell.render("Cell")
                  }));
                })
              })), row.isExpanded ? /*#__PURE__*/jsx("tr", {
                children: /*#__PURE__*/jsx("td", {
                  colSpan: visibleColumns.length,
                  children: renderRowSubComponent && renderRowSubComponent({
                    row
                  })
                })
              }) : null]
            }, (_row$getRowProps = row.getRowProps()) == null ? void 0 : _row$getRowProps.key);
          })
        }))]
      })), /*#__PURE__*/jsx("div", {
        className: "pagination-bottom",
        children: /*#__PURE__*/jsx("div", {
          className: "-pagination",
          children: /*#__PURE__*/jsx("div", {
            className: "-center flex-nowrap",
            children: /*#__PURE__*/jsx(Pagination, {
              className: "pagination-bar",
              pagination: pagination,
              currentPage: pagination.currentPage,
              totalCount: pagination.totalResults,
              pageSize: pagination.size,
              onPageChange: page => {
                handlePagination({
                  page
                });
              }
            })
          })
        })
      })]
    })
  });
}

Object.assign({}, Input.prototype.props);

/**
 *
 * @param {InputBaseProps} props
 * @returns
 */
const InputBase$1 = props => {
  return /*#__PURE__*/jsx(Input, _extends({}, props, {
    children: props.children
  }));
};
InputBase$1.propTypes = _extends({}, Input.propTypes && Input.propTypes);

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const FilterAndSearch = ({
  onFilter: _onFilter = () => {},
  onSearch: _onSearch = () => {},
  onSort: _onSort = () => {},
  isSearchable,
  isFilterable,
  hasBulkActions,
  isSortable,
  sorts: _sorts = [],
  tableToolbar,
  filterToolbar,
  title: _title = ""
}) => {
  React.useState("");
  let [sortLabel, setSortLabel] = React.useState("");
  let [searchString, setSearchString] = React.useState("");
  const debouncedSearchString = useDebounce(searchString, 500);
  const [sortDropdownOpen, setSortDropdownOpen] = React.useState(false);
  const sortToggle = () => setSortDropdownOpen(!sortDropdownOpen);
  React.useEffect(() => {
    _onSearch({
      value: {
        clientSearch: debouncedSearchString
      }
    });
  }, [debouncedSearchString]);
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsxs(RowBase, {
      className: "filter-search d-lg-flex justify-around align-items-center px-lg-4 my-4",
      children: [/*#__PURE__*/jsx(ColBase, {
        md: "4",
        sm: "12",
        className: " mb-3",
        children: _title && /*#__PURE__*/jsx("h4", {
          children: _title
        })
      }), /*#__PURE__*/jsx(ColBase, {
        md: "8",
        sm: "12",
        className: "mb-3",
        children: /*#__PURE__*/jsxs("div", {
          className: "d-flex justify-content-lg-end justify-content-md-end action-container",
          children: [tableToolbar && /*#__PURE__*/jsx("div", {
            className: "me-md-3 mr-md-3 create-filer",
            children: tableToolbar
          }), hasBulkActions && /*#__PURE__*/jsx(Fragment, {
            children: /*#__PURE__*/jsxs(UncontrolledDropdown, {
              children: [/*#__PURE__*/jsx(DropdownToogleBase, {
                className: " p-0 table-actions border-primary text-primary",
                children: /*#__PURE__*/jsx("i", {
                  class: "fa-solid fa-ellipsis-vertical"
                })
              }), /*#__PURE__*/jsxs(DropdownMenuBase, {
                children: [/*#__PURE__*/jsx(DropdownItemBase, {
                  children: "hello"
                }), /*#__PURE__*/jsx(DropdownItemBase, {
                  children: "world"
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx(ColBase, {
        md: "12",
        sm: "12",
        children: /*#__PURE__*/jsxs("div", {
          className: "d-flex justify-content-lg-start justify-content-md-start action-container",
          children: [/*#__PURE__*/jsx("div", {
            className: "d-flex create-filter-wrapper",
            children: isFilterable && filterToolbar && /*#__PURE__*/jsx("div", {
              className: "me-md-3 mr-md-3 create-filer",
              children: filterToolbar
            })
          }), isSearchable && /*#__PURE__*/jsxs("div", {
            className: "me-md-3 mr-md-3  table-search-container shadow-sm--hover",
            children: [/*#__PURE__*/jsx("i", {
              className: "fa-solid fa-search my-auto ms-3 ml-3 p-0"
            }), /*#__PURE__*/jsx(InputBase$1, {
              size: "sm",
              onChange: e => setSearchString(e.currentTarget.value.toString()),
              placeholder: "Search",
              className: "border-0 table-search-input",
              type: "text"
            })]
          }), /*#__PURE__*/jsx("div", {
            className: "d-flex create-filter-wrapper",
            children: isSortable && /*#__PURE__*/jsx("div", {
              className: "me-md-3 mr-md-3 create-filer",
              children: /*#__PURE__*/jsxs(DropdownBase, {
                isOpen: sortDropdownOpen,
                toggle: sortToggle,
                children: [/*#__PURE__*/jsxs(DropdownToogleBase, {
                  className: "filter",
                  color: "secondary",
                  outline: true,
                  size: "md",
                  children: [/*#__PURE__*/jsx("i", {
                    class: "fa-solid fa-sort me-2 mr-2 p-0 shadow-sm--hover"
                  }), sortLabel ? sortLabel : "Sort"]
                }), /*#__PURE__*/jsx(DropdownMenuBase, {
                  className: "mt-3",
                  children: _sorts && _sorts.length > 0 && _sorts.map(sort => /*#__PURE__*/jsx(DropdownItemBase, {
                    style: {
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "#152536"
                    },
                    onClick: () => {
                      setSortLabel(sort.label);
                      _onSort(sort);
                    },
                    className: "d-flex align-items-center fw-bold my-2",
                    children: sort.label
                  }))
                })]
              })
            })
          })]
        })
      })]
    })
  });
};

const _excluded$C = ["columns", "data", "renderRowSubComponent", "rowProps", "className", "handleCreate", "handleSearch", "handleFilter", "handlePagination", "filters", "pagination"];
function Table(_ref) {
  let {
      columns,
      data,
      renderRowSubComponent,
      rowProps = () => ({}),
      className = "-highlight -striped ",
      handleCreate = () => {},
      handleSearch = () => {},
      handleFilter = () => {},
      handlePagination = () => {},
      filters = [],
      pagination = {
        currentPage: 1,
        hasNextPage: true,
        hasPrevPage: false,
        nextPage: 2,
        prevPage: null,
        size: 10,
        totalPages: 2,
        totalResults: 17
      }
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$C);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: {
      expanded
    },
    visibleColumns
  } = useTable({
    columns,
    data,
    initialState: {
      pageSize: 10,
      pageIndex: 0
    }
  }, useSortBy, useExpanded, usePagination$1, useResizeColumns, useFlexLayout);
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsx("div", {
      className: "visual-table",
      children: /*#__PURE__*/jsxs("div", {
        className: "ReactTable " + className,
        children: [/*#__PURE__*/jsx("div", {
          className: "pagination-top",
          children: /*#__PURE__*/jsx(FilterAndSearch, _extends({
            filters: filters,
            onFilter: filter => handleFilter(filter),
            onSearch: search => handleSearch(search),
            onClick: () => handleCreate()
          }, props))
        }), /*#__PURE__*/jsxs("table", _extends({}, getTableProps(), {
          className: "rt-table ",
          children: [/*#__PURE__*/jsx("thead", {
            className: "rt-thead -header",
            children: headerGroups.map(headerGroup => /*#__PURE__*/jsx("tr", _extends({}, headerGroup.getHeaderGroupProps(), {
              className: "rt-tr",
              children: headerGroup.headers.map((column, key) => /*#__PURE__*/jsxs("th", _extends({}, column.getHeaderProps(column.getSortByToggleProps()), {
                className: classNames("rt-th rt-resizable-header", {
                  "-cursor-pointer": column.canSort,
                  "-sort-asc": column.isSorted && !column.isSortedDesc,
                  "-sort-desc": column.isSorted && column.isSortedDesc
                }),
                children: [/*#__PURE__*/jsxs("div", {
                  className: "rt-resizable-header-content",
                  children: [column.render("Header"), /*#__PURE__*/jsx("div", _extends({}, column.getResizerProps(), {
                    className: classNames("col-resizer", {
                      " active": column.isResizing
                    })
                  }))]
                }), /*#__PURE__*/jsx("div", {
                  children: headerGroup.headers.length - 1 === key ? null : column.canFilter ? column.render("Filter") : null
                })]
              })))
            })))
          }), /*#__PURE__*/jsx("tbody", _extends({}, getTableBodyProps(), {
            className: "rt-tbody",
            children: page.map((row, i) => {
              var _row$getRowProps;
              prepareRow(row);
              const rowStyel = classNames("rt-tr", {
                " -odd": i % 2 === 0
              }, {
                " -even": i % 2 === 1
              });
              return /*#__PURE__*/jsxs(React.Fragment, {
                children: [/*#__PURE__*/jsx("tr", _extends({
                  /**
                   * in the follwing we are muting row object and putting classNames
                   * this is a custom property added to get control from outside
                   */
                  className: rowStyel
                }, row.getRowProps(rowProps(_extends({}, row, {
                  className: rowStyel
                }))), {
                  children: row.cells.map(cell => {
                    return /*#__PURE__*/jsx("td", _extends({}, cell.getCellProps(), {
                      className: "rt-td",
                      children: cell.render("Cell")
                    }));
                  })
                })), row.isExpanded ? /*#__PURE__*/jsx("tr", {
                  children: /*#__PURE__*/jsx("td", {
                    colSpan: visibleColumns.length,
                    children: renderRowSubComponent && renderRowSubComponent({
                      row
                    })
                  })
                }) : null]
              }, (_row$getRowProps = row.getRowProps()) == null ? void 0 : _row$getRowProps.key);
            })
          }))]
        })), /*#__PURE__*/jsx("div", {
          className: "pagination-bottom",
          children: /*#__PURE__*/jsx("div", {
            className: "-pagination",
            children: /*#__PURE__*/jsx("div", {
              className: "-center flex-nowrap",
              children: /*#__PURE__*/jsx(Pagination, {
                className: "pagination-bar",
                pagination: pagination,
                currentPage: pagination.currentPage,
                totalCount: pagination.totalResults,
                pageSize: pagination.size,
                onPageChange: page => {
                  handlePagination({
                    page
                  });
                }
              })
            })
          })
        })]
      })
    })
  });
}

const _excluded$B = ["children"];
var _List$prototype;
Object.assign({}, (_List$prototype = List.prototype) == null ? void 0 : _List$prototype.props);

/**
 *
 * @param {ListBaseProps} props
 * @returns
 */

const ListBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$B);
  return /*#__PURE__*/jsx(List, _extends({}, rest, {
    children: children
  }));
};
ListBase.propTypes = _extends({}, List.propTypes && List.propTypes);

const _excluded$A = ["children"];
var _ListGroup$prototype;
Object.assign({}, (_ListGroup$prototype = ListGroup.prototype) == null ? void 0 : _ListGroup$prototype.props);

/**
 *
 * @param {ListGroupBaseProps} props
 * @returns
 */

const ListGroupBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$A);
  return /*#__PURE__*/jsx(ListGroup, _extends({}, rest, {
    children: children
  }));
};
ListGroupBase.propTypes = _extends({}, ListGroup.propTypes && ListGroup.propTypes);

const _excluded$z = ["children"];
var _ListGroupItem$protot;
Object.assign({}, (_ListGroupItem$protot = ListGroupItem.prototype) == null ? void 0 : _ListGroupItem$protot.props);

/**
 *
 * @param {ListGroupItemBaseProps} props
 * @returns
 */

const ListGroupItemBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$z);
  return /*#__PURE__*/jsx(ListGroupItem, _extends({}, rest, {
    children: children
  }));
};
ListGroupItemBase.propTypes = _extends({}, ListGroupItem.propTypes && ListGroupItem.propTypes);

const _excluded$y = ["children"];
var _ListGroupItemHeading;
Object.assign({}, (_ListGroupItemHeading = ListGroupItemHeading.prototype) == null ? void 0 : _ListGroupItemHeading.props);

/**
 *
 * @param {ListGroupItemHeadingBaseProps} props
 * @returns
 */

const ListGroupItemHeadingBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$y);
  return /*#__PURE__*/jsx(ListGroupItemHeading, _extends({}, rest, {
    children: children
  }));
};
ListGroupItemHeadingBase.propTypes = _extends({}, ListGroupItemHeading.propTypes && ListGroupItemHeading.propTypes);

const _excluded$x = ["children"];
var _ListGroupItemText$pr;
Object.assign({}, (_ListGroupItemText$pr = ListGroupItemText.prototype) == null ? void 0 : _ListGroupItemText$pr.props);

/**
 *
 * @param {ListGroupItemTextBaseProps} props
 * @returns
 */

const ListGroupItemTextBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$x);
  return /*#__PURE__*/jsx(ListGroupItemText, _extends({}, rest, {
    children: children
  }));
};
ListGroupItemTextBase.propTypes = _extends({}, ListGroupItemText.propTypes && ListGroupItemText.propTypes);

const _excluded$w = ["children"];
var _ListInlineItem$proto;
Object.assign({}, (_ListInlineItem$proto = ListInlineItem.prototype) == null ? void 0 : _ListInlineItem$proto.props);

/**
 *
 * @param {ListInlineItemBaseProps} props
 * @returns
 */

const ListInlineItemBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$w);
  return /*#__PURE__*/jsx(ListInlineItem, _extends({}, rest, {
    children: children
  }));
};
ListInlineItemBase.propTypes = _extends({}, ListInlineItem.propTypes && ListInlineItem.propTypes);

Object.assign({}, Form.prototype.props);

/**
 *
 * @param {FormBaseProps} props
 * @returns
 */
const FormBase = props => {
  return /*#__PURE__*/jsx(Form, _extends({}, props, {
    children: props.children
  }));
};
FormBase.propTypes = _extends({}, Form.propTypes && Form.propTypes);

Object.assign({}, FormFeedback.prototype.props);

/**
 *
 * @param {FormFeedbackBaseProps} props
 * @returns
 */
const FormFeedbackBase = props => {
  return /*#__PURE__*/jsx(FormFeedback, _extends({}, props, {
    children: props.children
  }));
};
FormFeedbackBase.propTypes = _extends({}, FormFeedback.propTypes && FormFeedback.propTypes);

Object.assign({}, FormText.prototype.props);

/**
 *
 * @param {FormTextBaseProps} props
 * @returns
 */
const FormTextBase = props => {
  return /*#__PURE__*/jsx(FormText, _extends({}, props, {
    children: props.children
  }));
};
FormTextBase.propTypes = _extends({}, FormText.propTypes && FormText.propTypes);

Object.assign({}, FormGroup.prototype.props);

/**
 *
 * @param {FormGroupBaseProps} props
 * @returns
 */
const FormGroupBase = props => {
  return /*#__PURE__*/jsx(FormGroup, _extends({}, props, {
    children: props.children
  }));
};
FormGroupBase.propTypes = _extends({}, FormGroup.propTypes && FormGroup.propTypes);

const formatCreateLabel = (word, inputValue) => {
  return `${word} "${inputValue}"`;
};

const _excluded$v = ["leftPhrase"];
const CreatableSelectBase = _ref => {
  let {
      leftPhrase = "Add"
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$v);
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsx(CreatableSelect, _extends({
      className: "react-select",
      classNamePrefix: "react-select",
      formatCreateLabel: inputValue => formatCreateLabel(leftPhrase, inputValue)
    }, rest))
  });
};
CreatableSelect.propTypes = {
  // ...ReactSelect.propTypes,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isRtl: PropTypes.bool,
  isOptionDisabled: PropTypes.func,
  isOptionSelected: PropTypes.func,
  isOptionFocused: PropTypes.func,
  isFocused: PropTypes.bool,
  isLoading: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isRequired: PropTypes.bool,
  isCreatable: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  isMenuFixed: PropTypes.bool,
  isMenuPortal: PropTypes.bool,
  isMenuPositioned: PropTypes.bool,
  isMenuPositionFixed: PropTypes.bool,
  isMenuAutoFocused: PropTypes.bool,
  isControlled: PropTypes.bool,
  isFocusedOption: PropTypes.bool,
  isHidden: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  word: PropTypes.string
};

const _excluded$u = ["loadOptions"];
const ReactSearchBase = _ref => {
  let {
      loadOptions
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$u);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const onInputChange = value => {
    if (value.length > 0) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  };
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsx(AsyncSelect, _extends({
      className: "react-select",
      classNamePrefix: "react-select",
      loadOptions: loadOptions,
      onInputChange: onInputChange,
      menuIsOpen: menuIsOpen
    }, rest))
  });
};
ReactSearchBase.propTypes = {
  // ...ReactSelect.propTypes,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isRtl: PropTypes.bool,
  //   isOptionDisabled: PropTypes.func,
  isOptionSelected: PropTypes.func,
  isOptionFocused: PropTypes.func,
  isFocused: PropTypes.bool,
  isLoading: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isRequired: PropTypes.bool,
  isCreatable: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  isMenuFixed: PropTypes.bool,
  isMenuPortal: PropTypes.bool,
  isMenuPositioned: PropTypes.bool,
  isMenuPositionFixed: PropTypes.bool,
  isMenuAutoFocused: PropTypes.bool,
  isControlled: PropTypes.bool,
  isFocusedOption: PropTypes.bool,
  isHidden: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  word: PropTypes.string
};

const ReactSelectBase = _ref => {
  let rest = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/jsx(ReactSelect, _extends({
    classNamePrefix: "react-select",
    className: "react-select"
  }, rest));
};
ReactSelect.propTypes = {
  // ...ReactSelect.propTypes,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isRtl: PropTypes.bool,
  isOptionDisabled: PropTypes.func,
  isOptionSelected: PropTypes.func,
  isOptionFocused: PropTypes.func,
  isFocused: PropTypes.bool,
  isLoading: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isRequired: PropTypes.bool,
  isCreatable: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  isMenuFixed: PropTypes.bool,
  isMenuPortal: PropTypes.bool,
  isMenuPositioned: PropTypes.bool,
  isMenuPositionFixed: PropTypes.bool,
  isMenuAutoFocused: PropTypes.bool,
  isControlled: PropTypes.bool,
  isFocusedOption: PropTypes.bool,
  isHidden: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  word: PropTypes.string
};

Object.assign({}, InputGroup.prototype.props);

/**
 *
 * @param {InputGroupBaseProps} props
 * @returns
 */
const InputGroupBase$1 = props => {
  return /*#__PURE__*/jsx(InputGroup, _extends({}, props, {
    children: props.children
  }));
};
InputGroupBase$1.propTypes = _extends({}, InputGroup.propTypes && InputGroup.propTypes);

Object.assign({}, InputGroupText.prototype.props);

/**
 *
 * @param {InputGroupTextBaseProps} props
 * @returns
 */
const InputGroupTextBase$1 = props => {
  return /*#__PURE__*/jsx(InputGroupText, _extends({}, props, {
    children: props.children
  }));
};
InputGroupTextBase$1.propTypes = _extends({}, InputGroupText.propTypes && InputGroupText.propTypes);

Object.assign({}, Label.prototype.props);

/**
 *
 * @param {LabelBaseProps} props
 * @returns
 */
const LabelBase = props => {
  return /*#__PURE__*/jsx(Label, _extends({}, props, {
    children: props.children
  }));
};
LabelBase.propTypes = _extends({}, Label.propTypes && Label.propTypes);

Object.assign({}, Media.prototype.props);

/**
 *
 * @param {MediaBaseProps} props
 * @returns
 */
const MediaBase = props => {
  return /*#__PURE__*/jsx(Media, _extends({}, props, {
    children: props.children
  }));
};
MediaBase.propTypes = _extends({}, Media.propTypes && Media.propTypes);

Object.assign({}, Offcanvas.prototype.props);

/**
 *
 * @param {OffcanvasBaseProps} props
 * @returns
 */
const OffcanvasBase = props => {
  return /*#__PURE__*/jsx(Offcanvas, _extends({}, props, {
    children: props.children
  }));
};
OffcanvasBase.propTypes = _extends({}, Offcanvas.propTypes && Offcanvas.propTypes);

Object.assign({}, OffcanvasBody.prototype.props);

/**
 *
 * @param {OffcanvasBodyBaseProps} props
 * @returns
 */
const OffcanvasBodyBase = props => {
  return /*#__PURE__*/jsx(OffcanvasBody, _extends({}, props, {
    children: props.children
  }));
};
OffcanvasBodyBase.propTypes = _extends({}, OffcanvasBody.propTypes && OffcanvasBody.propTypes);

Object.assign({}, OffcanvasHeader.prototype.props);

/**
 *
 * @param {OffcanvasHeaderBaseProps} props
 * @returns
 */
const OffcanvasHeaderBase = props => {
  return /*#__PURE__*/jsx(OffcanvasHeader, _extends({}, props, {
    children: props.children
  }));
};
OffcanvasHeaderBase.propTypes = _extends({}, OffcanvasHeader.propTypes && OffcanvasHeader.propTypes);

const _excluded$t = ["file", "name", "onDelete"],
  _excluded2 = ["onSelected", "hint"];
function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "n/a";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return `${bytes} ${sizes[i]})`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}
function Attachment(_ref) {
  let {
      file,
      onDelete
    } = _ref;
    _objectWithoutPropertiesLoose(_ref, _excluded$t);
  let [processing, setProcessing] = useState({
    action: null,
    id: null
  });
  let [uploading, setUploading] = useState({
    status: false,
    progress: 0
  });
  return /*#__PURE__*/jsx(Col, {
    md: "4",
    children: /*#__PURE__*/jsx(Card, {
      className: "",
      children: /*#__PURE__*/jsxs(CardBody, {
        children: [/*#__PURE__*/jsxs("h5", {
          className: "mb-1",
          children: [/*#__PURE__*/jsx("i", {
            className: "tim-icons icon-paper"
          }), " ", file.path, " "]
        }), /*#__PURE__*/jsxs("h5", {
          className: "m-0",
          children: [!processing.action ? /*#__PURE__*/jsx("i", {
            onClick: e => onDelete(file),
            className: "tim-icons icon-simple-remove"
          }) : /*#__PURE__*/jsx(Spinner, {
            color: "text-damger",
            size: "sm"
          }), " ", /*#__PURE__*/jsx("small", {
            children: bytesToSize(file.size)
          })]
        }), uploading.status && uploading.progress < 100 && /*#__PURE__*/jsx(Progress, {
          value: uploading.progress
        })]
      })
    })
  });
}
/**
 * File drop zone can be used in any form elements along with other bootstrap forms. Allows users to
 * direct file drag and drop from their machine or just simply select ability by clicking anywhere on it
 */
function FileDropZone(_ref2) {
  let {
      onSelected = () => {},
      hint = "Drag 'n' drop, or click to select files"
    } = _ref2,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const onDrop = React.useCallback((acceptedFiles, rejectedFiles) => {
    let duplicatePaths = selectedFiles.map(file => file.path) || [];
    acceptedFiles = acceptedFiles.filter(file => !duplicatePaths.includes(file.path));
    setSelectedFiles(previousFiles => [...previousFiles, ...acceptedFiles]);
  }, [selectedFiles]);
  React.useEffect(() => {
    onSelected(selectedFiles);
  }, [selectedFiles]);
  const {
    getRootProps,
    getInputProps
  } = useDropzone(_extends({
    onDrop
  }, props.acceptedFileTypes && {
    accept: props.acceptedFileTypes
  }, {
    multiple: props.noMultiple ? false : true,
    disabled: props.disabled
  }));
  const handleRemove = deleteFile => setSelectedFiles(prevFiles => prevFiles.filter(file => file.path !== deleteFile.path));
  return /*#__PURE__*/jsxs("section", {
    children: [/*#__PURE__*/jsx("input", {
      type: "file",
      name: "",
      id: ""
    }), /*#__PURE__*/jsxs("div", _extends({}, getRootProps({
      className: "dropzone"
    }), {
      children: [/*#__PURE__*/jsx("input", _extends({}, getInputProps())), /*#__PURE__*/jsx("p", {
        children: hint
      })]
    })), /*#__PURE__*/jsx("aside", {
      children: /*#__PURE__*/jsx(Row, {
        children: selectedFiles.map(file => /*#__PURE__*/jsx(Attachment, {
          file: file,
          name: props.name,
          onDelete: handleRemove
        }, file.path))
      })
    })]
  });
}
FileDropZone.propTypes = {
  /** `hint` is a place holder or hint for users in the dropzone.  */
  hint: PropTypes.string,
  /**
   * `onSelected` is fired when files are loaded from users system and provides files in the args.
   */
  onSelected: PropTypes.func,
  /**
   * `noMultiple` tells wheter or not multiple file selection is allowed or not.
   */
  noMultiple: PropTypes.bool,
  /**
   * `disabled` disables file selection.
   */
  disabled: PropTypes.bool
};

const _excluded$s = ["label", "mandatory", "onChange", "unselected", "error", "helperText"];
let ImsInputCheckProps = Object.assign({}, Input.prototype.props);

/**
 *
 * @param {ImsInputCheckProps} props
 * @returns
 */

const ImsInputCheck = _ref => {
  let {
      label,
      mandatory = false,
      unselected = false,
      error,
      helperText
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$s);
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      check: true,
      className: classNames("", {
        "unselected-checkbox": unselected
      }),
      children: [/*#__PURE__*/jsxs(Col, {
        md: "12",
        children: [/*#__PURE__*/jsx(Input, _extends({
          type: "checkbox"
        }, rest)), " ", /*#__PURE__*/jsxs(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          check: true,
          children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
            className: "text-danger",
            children: "*"
          }) : ""]
        })]
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsxs("label", {
          children: [" ", /*#__PURE__*/jsx("small", {
            children: helperText
          })]
        })]
      })]
    })
  });
};
ImsInputCheck.propTypes = _extends({}, ImsInputCheckProps || {}, {
  /** Label for the input */
  label: PropTypes.string,
  /** Mandatory input */
  mandatory: PropTypes.bool,
  /** Unselected checkbox */
  unselected: PropTypes.bool
}, Input.propTypes);

const DateTimeBase = _ref => {
  let rest = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/jsx(Datetime, _extends({}, rest));
};

const ImsInputDate = ({
  label,
  name,
  value,
  onChange,
  error,
  mandatory: _mandatory = false,
  disabled,
  helperText
}) => {
  return /*#__PURE__*/jsxs(FormGroup, {
    row: true,
    children: [/*#__PURE__*/jsx(Col, {
      sm: "12",
      children: /*#__PURE__*/jsxs(Label, {
        style: {
          fontSize: "16px"
        },
        className: "text-dark",
        children: [label, " ", _mandatory ? /*#__PURE__*/jsx("span", {
          className: "text-danger",
          children: "*"
        }) : ""]
      })
    }), /*#__PURE__*/jsxs(Col, {
      sm: "12",
      children: [/*#__PURE__*/jsx(DateTimeBase, {
        inputProps: {
          disabled,
          placeholder: "Select date",
          className: "form-control",
          value,
          name,
          // this onchange is direct input ...
          onChange,
          autoComplete: "off"
        }
        // this onchange is for calender ...
        ,
        onChange: e => {
          if (typeof e === "object") {
            let currentTarget = {
              name,
              value: e.format("D/M/YYYY")
            };
            onChange({
              currentTarget
            });
          }
        },
        timeFormat: false,
        dateFormat: "D/M/YYYY",
        closeOnSelect: true
      }), error && /*#__PURE__*/jsx("label", {
        className: "text-danger",
        children: /*#__PURE__*/jsx("small", {
          children: error
        })
      }), helperText && /*#__PURE__*/jsx("label", {
        className: "",
        children: /*#__PURE__*/jsx("small", {
          children: helperText
        })
      })]
    })]
  });
};

const _excluded$r = ["label", "error", "clearAll", "onLoad", "name", "onChange", "noMultiple"];
const ImsInputDropZone = _ref => {
  let {
      label,
      clearAll = false,
      onLoad,
      name,
      noMultiple
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$r);
  return /*#__PURE__*/jsxs(FormGroup, {
    row: true,
    children: [/*#__PURE__*/jsx(Col, {
      sm: "12",
      children: /*#__PURE__*/jsx(Label, {
        style: {
          fontSize: "16px"
        },
        className: "text-dark",
        children: label
      })
    }), /*#__PURE__*/jsx(Col, {
      sm: "12",
      children: /*#__PURE__*/jsx(FileDropZone, _extends({}, rest, {
        name: name,
        clearAll: clearAll,
        noMultiple: noMultiple,
        onLoad: files => onLoad(files)
      }))
    })]
  });
};

const _excluded$q = ["label", "mandatory", "unselected"];
let ImsInputRadioProps = Object.assign({}, Input.prototype.props);

/**
 *
 * @param {ImsInputRadioProps} props
 * @returns
 */

const ImsRadioCheckbox = _ref => {
  let {
      label,
      mandatory = false,
      unselected = false
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$q);
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      check: true,
      className: classNames("", {
        "unselected-radio": unselected
      }),
      children: [/*#__PURE__*/jsx(Input, _extends({
        type: "radio"
      }, rest)), " ", /*#__PURE__*/jsxs(Label, {
        style: {
          fontSize: "16px"
        },
        className: "text-dark",
        check: true,
        children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
          className: "text-danger",
          children: "*"
        }) : ""]
      })]
    })
  });
};
ImsRadioCheckbox.propTypes = _extends({}, ImsInputRadioProps || {}, {
  /** Label for the input */
  label: PropTypes.string,
  /** Mandatory input */
  mandatory: PropTypes.bool,
  /** Unselected checkbox */
  unselected: PropTypes.bool
}, Input.propTypes);

const _excluded$p = ["label", "onChange", "values", "unselected", "defaultChecked", "verticalAlign", "error", "helperText"];
const ImsInputRadio = _ref => {
  let {
      label,
      onChange,
      values,
      unselected,
      defaultChecked,
      verticalAlign = false,
      error,
      helperText
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$p);
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      check: true,
      row: true,
      children: [/*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsx(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          sm: "12",
          children: label
        })
      }), /*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsx("div", {
          className: classNames("", {
            "d-flex flex-wrap": !verticalAlign
          }),
          children: values && (values == null ? void 0 : values.map((value, index) => /*#__PURE__*/jsx("span", {
            className: classNames("", {
              "mr-3 me-3": !verticalAlign
            }),
            children: /*#__PURE__*/jsx(ImsRadioCheckbox, _extends({
              label: value,
              onChange: onChange,
              unselected: unselected,
              defaultChecked: defaultChecked && defaultChecked === value ? true : false
            }, rest))
          }, index)))
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsxs("label", {
          children: [" ", /*#__PURE__*/jsx("small", {
            children: helperText
          })]
        })]
      })]
    })
  });
};

const _excluded$o = ["label", "error", "name", "onChange", "mandatory", "helperText", "sideBtn"];
const ImsInputSelect = _ref => {
  let {
      label,
      error,
      name,
      onChange = () => {},
      mandatory = false,
      helperText,
      sideBtn
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$o);
  const handleChange = changes => {
    if (!changes) {
      let currentTarget = {
        name,
        value: []
      };
      onChange({
        currentTarget
      });
    } else if (Array.isArray(changes)) {
      let currentTarget = {
        name,
        value: changes //changes.map(item => item.value)
      };
      onChange({
        currentTarget
      });
    } else {
      let currentTarget = {
        name,
        value: changes //changes.value
      };
      onChange({
        currentTarget
      });
    }
  };
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      row: true,
      children: [/*#__PURE__*/jsx(Col, {
        sm: "12",
        className: "d-flex",
        children: /*#__PURE__*/jsxs(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
            className: "text-danger",
            children: "*"
          }) : "", " ", sideBtn && sideBtn]
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [/*#__PURE__*/jsx(ReactSelectBase, _extends({}, rest, {
          onChange: handleChange
        })), error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsxs("label", {
          children: [" ", /*#__PURE__*/jsx("small", {
            children: helperText
          })]
        })]
      })]
    })
  });
};

const _excluded$n = ["children"];
Object.assign({}, InputGroup.prototype.props);

/**
 *
 * @param {InputGroupBaseProps} props
 * @returns
 */

const InputGroupBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$n);
  return /*#__PURE__*/jsx(InputGroup, _extends({}, rest, {
    children: children
  }));
};
InputGroupBase.propTypes = _extends({}, InputGroup.propTypes && InputGroup.propTypes);

const handleGroupFocus = e => {
  var _e$target$parentEleme;
  (_e$target$parentEleme = e.target.parentElement.parentElement.children[1]) == null || _e$target$parentEleme.focus();
  if (e.target.parentElement.parentElement.children[0]) {
    var _e$target$parentEleme2;
    (_e$target$parentEleme2 = e.target.parentElement.parentElement.children[0]) == null || _e$target$parentEleme2.focus();
  }
  if (e.target.parentElement.parentElement.children[2]) {
    var _e$target$parentEleme3;
    (_e$target$parentEleme3 = e.target.parentElement.parentElement.children[2]) == null || _e$target$parentEleme3.focus();
  }
};

const _excluded$m = ["children", "onClick"];
Object.assign({}, InputGroupText.prototype.props);

/**
 *
 * @param {InputGroupTextBaseProps} props
 * @returns
 */

const InputGroupTextBase = _ref => {
  let {
      children,
      onClick
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$m);
  return /*#__PURE__*/jsx(InputGroupText, _extends({
    onClick: e => {
      if (!onClick) handleGroupFocus(e);else onClick(e);
    }
  }, rest, {
    children: children
  }));
};
InputGroupTextBase.propTypes = _extends({}, InputGroupText.propTypes && InputGroupText.propTypes);

const _excluded$l = ["label", "error", "icon", "name", "onChange", "mandatory", "helperText"];
const ImsInputSelectWithIcon = _ref => {
  let {
      label,
      error,
      icon,
      name,
      onChange = () => {},
      mandatory = false,
      helperText
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$l);
  const handleChange = changes => {
    if (!changes) {
      let currentTarget = {
        name,
        value: []
      };
      onChange({
        currentTarget
      });
    } else if (Array.isArray(changes)) {
      let currentTarget = {
        name,
        value: changes //changes.map(item => item.value)
      };
      onChange({
        currentTarget
      });
    } else {
      let currentTarget = {
        name,
        value: changes //changes.value
      };
      onChange({
        currentTarget
      });
    }
  };
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      row: true,
      children: [/*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsxs(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
            className: "text-danger",
            children: "*"
          }) : ""]
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [/*#__PURE__*/jsxs(InputGroupBase, {
          children: [/*#__PURE__*/jsx(InputGroupTextBase, {
            children: /*#__PURE__*/jsx("i", {
              className: `${icon}`
            })
          }), /*#__PURE__*/jsx(ReactSelectBase, _extends({}, rest, {
            onChange: handleChange
          }))]
        }), error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsx("label", {
          children: /*#__PURE__*/jsx("small", {
            children: helperText
          })
        })]
      })]
    })
  });
};

const _excluded$k = ["label", "mandatory", "error", "feedbackText", "helperText"];
let ImsInputTextProps = Object.assign({}, InputBase$1.prototype.props);

/**
 * @param {ImsInputTextProps} props
 * @returns
 */

const ImsInputText = _ref => {
  let {
      label,
      mandatory = false,
      error = "",
      feedbackText = "",
      helperText = ""
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$k);
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      row: true,
      children: [label && /*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsxs(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
            className: "text-danger",
            children: "*"
          }) : ""]
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [/*#__PURE__*/jsx(InputBase$1, _extends({
          invalid: error
        }, rest)), error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsxs("label", {
          children: [" ", /*#__PURE__*/jsx("small", {
            children: helperText
          })]
        })]
      })]
    })
  });
};
ImsInputText.propTypes = _extends({}, ImsInputTextProps && ImsInputTextProps, {
  /** Left Icon */
  leftIcon: PropTypes.string,
  /** Right Icon */
  rightIcon: PropTypes.string,
  /** Left Icon Style */
  leftIconStyle: PropTypes.string,
  /** Right Icon Style */
  rightIconStyle: PropTypes.string,
  /** Label */
  label: PropTypes.string,
  /** Type */
  type: PropTypes.string,
  /** Mandatory */
  mandatory: PropTypes.bool,
  /** Error */
  error: PropTypes.string,
  /** Valid */
  //** Helper Text */
  helperText: PropTypes.string,
  valid: PropTypes.bool,
  /** On Change */
  onChange: PropTypes.func,
  /** Label Column */
  labelCol: PropTypes.string,
  /** Input Column */
  inputCol: PropTypes.string,
  /** Value */
  value: PropTypes.string,
  /** Placeholder */
  placeholder: PropTypes.string
}, InputBase$1.propTypes);

const _excluded$j = ["label", "onChange", "icon", "type", "mandatory", "error", "defaultOpt", "helperText"];
const ImsInputTextWithIcon = _ref => {
  let {
      label,
      icon,
      type = "text",
      mandatory = false,
      error,
      helperText
    } = _ref;
    _objectWithoutPropertiesLoose(_ref, _excluded$j);
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      row: true,
      children: [label && /*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsxs(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
            className: "text-danger",
            children: "*"
          }) : ""]
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [/*#__PURE__*/jsx(InputGroupBase, {
          children: /*#__PURE__*/jsx(InputGroupTextBase, {
            children: /*#__PURE__*/jsx("i", {
              className: `${icon}`
            })
          })
        }), error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsx("label", {
          className: "",
          children: /*#__PURE__*/jsx("small", {
            children: helperText
          })
        })]
      })]
    })
  });
};

const ImsInputTime = ({
  label,
  name,
  value,
  onChange,
  error,
  disabled,
  helperText
}) => {
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      row: true,
      children: [/*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsx(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          children: label
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [/*#__PURE__*/jsx(Datetime, {
          dateFormat: false,
          timeIntervals: 30,
          timeFormat: "HH:mm",
          inputProps: {
            disabled,
            className: "form-control",
            placeholder: "Select a time",
            value,
            name,
            // this onchange is direct input ...
            onChange,
            autoComplete: "off"
          }
          // this onchange is for calender ...
          ,
          onChange: e => {
            if (typeof e === "object") {
              let currentTarget = {
                name,
                value: e.format("HH:mm")
              };
              onChange({
                currentTarget
              });
            }
          },
          className: "text-dark"
        }), error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsx("label", {
          children: /*#__PURE__*/jsx("small", {
            children: helperText
          })
        })]
      })]
    })
  });
};

Object.assign({}, Input.prototype.props);

/**
 *
 * @param {InputBaseProps} props
 * @returns
 */

const InputBase = _ref => {
  let rest = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/jsx(Input, _extends({}, rest));
};
InputBase.propTypes = _extends({}, Input.propTypes && Input.propTypes);

const _excluded$i = ["children"];
Object.assign({
  separated: PropTypes.bool
}, Pagination$1.prototype.props);
/**
 *
 * @param {PaginationBaseProps} props
 * @returns
 */

const PaginationBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$i);
  return /*#__PURE__*/jsx(Pagination$1, _extends({
    className: classNames(`pagination-separated ${rest.className}`, {})
  }, rest, {
    children: children
  }));
};
PaginationBase.propTypes = _extends({
  separated: PropTypes.bool
}, Pagination$1.propTypes && Pagination$1.propTypes);

const _excluded$h = ["children"];
Object.assign({}, PaginationItem.prototype.props);
/**
 *
 * @param {PaginationItemBaseProps} props
 * @returns
 */

const PaginationItemBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$h);
  return /*#__PURE__*/jsx(PaginationItem, _extends({}, rest, {
    children: children
  }));
};
PaginationItemBase.propTypes = _extends({}, PaginationItem.propTypes && PaginationItem.propTypes);

const _excluded$g = ["children"];
Object.assign({}, PaginationLink.prototype.props);
/**
 *
 * @param {PaginationLinkBaseProps} props
 * @returns
 */

const PaginationLinkBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$g);
  return /*#__PURE__*/jsx(ButtonBase, _extends({
    className: classNames(`page-link ${rest.className}`, {})
  }, rest, {
    children: children
  }));
};
PaginationLinkBase.propTypes = _extends({}, PaginationLink.propTypes && PaginationLink.propTypes);

const _excluded$f = ["children"];
var _TabContent$prototype;
Object.assign({}, (_TabContent$prototype = TabContent.prototype) == null ? void 0 : _TabContent$prototype.props);

/**
 *
 * @param {TabContentBaseProps} props
 * @returns
 */
const TabContentBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$f);
  return /*#__PURE__*/jsx(TabContent, _extends({}, rest, {
    children: children
  }));
};
TabContentBase.propTypes = _extends({}, TabContent.propTypes && TabContent.propTypes);

const _excluded$e = ["children"];
var _TabPane$prototype;
Object.assign({}, (_TabPane$prototype = TabPane.prototype) == null ? void 0 : _TabPane$prototype.props);

/**
 *
 * @param {TabPaneBaseProps} props
 * @returns
 */

const TabPaneBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$e);
  return /*#__PURE__*/jsx(TabPane, _extends({}, rest, {
    children: children
  }));
};
TabPaneBase.propTypes = _extends({}, TabPane.propTypes && TabPane.propTypes);

const _excluded$d = ["children"];
var _Alert$prototype;
Object.assign({}, (_Alert$prototype = Alert.prototype) == null ? void 0 : _Alert$prototype.props);

/**
 * @param {AlertBaseProps} props
 * @returns
 * */

const AlertBase = _ref => {
  let {
      children
    } = _ref;
    _objectWithoutPropertiesLoose(_ref, _excluded$d);
  return /*#__PURE__*/jsx(Alert, {
    children: children
  });
};
AlertBase.propTypes = _extends({}, Alert.propTypes && Alert.propTypes);

const _excluded$c = ["children"];
var _UncontrolledAlert$pr;
Object.assign({}, (_UncontrolledAlert$pr = UncontrolledAlert.prototype) == null ? void 0 : _UncontrolledAlert$pr.props);

/**
 * @param {UncontrolledAlertBaseProps} props
 * @returns
 * */

const UncontrolledAlertBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$c);
  return /*#__PURE__*/jsx(UncontrolledAlert, _extends({}, rest, {
    children: children
  }));
};
UncontrolledAlertBase.propTypes = _extends({}, UncontrolledAlert.propTypes && UncontrolledAlert.propTypes);

const _excluded$b = ["children"];
var _Toast$prototype;
Object.assign({}, (_Toast$prototype = Toast.prototype) == null ? void 0 : _Toast$prototype.props);

/**
 * @param {ToastBaseProps} props
 * @returns
 * */

const ToastBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  return /*#__PURE__*/jsx(Toast, _extends({}, rest, {
    children: children
  }));
};
ToastBase.propTypes = _extends({}, Toast.propTypes && Toast.propTypes);

const _excluded$a = ["children"];
var _ToastBody$prototype;
Object.assign({}, (_ToastBody$prototype = ToastBody.prototype) == null ? void 0 : _ToastBody$prototype.props);

/**
 * @param {ToastBodyBaseProps} props
 *  @returns
 * */

const ToastBodyBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  return /*#__PURE__*/jsx(ToastBody, _extends({}, rest, {
    children: children
  }));
};
ToastBodyBase.propTypes = _extends({}, ToastBody.propTypes && ToastBody.propTypes);

const _excluded$9 = ["children"];
var _ToastHeader$prototyp;
Object.assign({}, (_ToastHeader$prototyp = ToastHeader.prototype) == null ? void 0 : _ToastHeader$prototyp.props);

/**
 * @param {ToastHeaderBaseProps} props
 * @returns
 * */

const ToastHeaderBase = _ref => {
  let rest = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  return /*#__PURE__*/jsx(ToastHeader, _extends({}, rest, {
    children: "ToastHeaderBase"
  }));
};
ToastHeaderBase.propTypes = _extends({}, ToastHeader.propTypes && ToastHeader.propTypes);

const _excluded$8 = ["children"];
var _Collapse$prototype;
Object.assign({}, (_Collapse$prototype = Collapse.prototype) == null ? void 0 : _Collapse$prototype.props);

/**
 * @param {CollapseBaseProps} props
 * @returns
 * */

const CollapseBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  return /*#__PURE__*/jsx(Collapse, _extends({}, rest, {
    children: children
  }));
};
CollapseBase.propTypes = _extends({}, Collapse.propTypes && Collapse.propTypes);

const _excluded$7 = ["children"];
var _UncontrolledCollapse;
Object.assign({}, (_UncontrolledCollapse = UncontrolledCollapse.prototype) == null ? void 0 : _UncontrolledCollapse.props);

/**
 * @param {UncontrolledCollapseBaseProps} props
 * @returns
 * */

const UncontrolledCollapseBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  return /*#__PURE__*/jsx(UncontrolledCollapse, _extends({}, rest, {
    children: children
  }));
};
UncontrolledCollapseBase.propTypes = _extends({}, UncontrolledCollapse.propTypes && UncontrolledCollapse.propTypes);

Object.assign({}, Progress.prototype.props);

/**
 *
 * @param {ProgressBaseProps} props
 * @returns
 */
const ProgressBase = props => {
  return /*#__PURE__*/jsx(Progress, _extends({}, props));
};
ProgressBase.propTypes = _extends({}, Progress.propTypes && Progress.propTypes);

const _excluded$6 = ["children"];
Object.assign({}, Spinner.prototype.props);

/**
 * @param {SpinnerBaseProps} props
 * @returns
 * */

const SpinnerBase = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  return /*#__PURE__*/jsx(Spinner, _extends({}, rest, {
    children: children
  }));
};
SpinnerBase.propTypes = _extends({}, Spinner.propTypes && Spinner.propTypes);

Object.assign({}, Placeholder.prototype.props);

/**
 *
 * @param {PlaceholderBaseProps} props
 * @returns
 */
const PlaceholderBase = props => {
  return /*#__PURE__*/jsx(Placeholder, _extends({}, props, {
    children: props.children
  }));
};
PlaceholderBase.propTypes = _extends({}, Placeholder.propTypes && Placeholder.propTypes);

Object.assign({}, PlaceholderButton.prototype.props);

/**
 *
 * @param {PlaceholderButtonBaseProps} props
 * @returns
 */
const PlaceholderButtonBase = props => {
  return /*#__PURE__*/jsx(PlaceholderButton, _extends({}, props, {
    children: props.children
  }));
};
PlaceholderButtonBase.propTypes = _extends({}, PlaceholderButton.propTypes && PlaceholderButton.propTypes);

const _excluded$5 = ["avatar", "name", "subHeading", "activity", "footer"];
const ActivityBase = _ref => {
  let {
      avatar,
      name,
      subHeading,
      activity,
      footer
    } = _ref;
    _objectWithoutPropertiesLoose(_ref, _excluded$5);
  return /*#__PURE__*/jsxs(CardBase, {
    className: "bg-transparent border-0 shadow-none activity ms-5 ml-5 mb-0",
    children: [/*#__PURE__*/jsx(CardHeaderBase, {
      className: "bg-transparent border-0 shadow-none ",
      children: /*#__PURE__*/jsxs("div", {
        className: "d-flex",
        children: [/*#__PURE__*/jsx("div", {
          className: "avatar-container",
          children: /*#__PURE__*/jsx("img", {
            src: avatar,
            alt: "avatar",
            className: "avatar mt-1 ms-3 ml-3"
          })
        }), /*#__PURE__*/jsxs("div", {
          children: [/*#__PURE__*/jsx("p", {
            className: "m-0 font-size-body-2 text-type-dark",
            children: name
          }), subHeading && /*#__PURE__*/jsx("h6", {
            className: "mb-1  font-size-caption text-type-medium",
            children: subHeading
          })]
        })]
      })
    }), /*#__PURE__*/jsx(CardBodyBase, {
      className: "bg-transparent border-0 shadow-none p-0 ",
      children: activity
    }), /*#__PURE__*/jsx(CardFooterBase, {
      className: "bg-transparent border-0 shadow-none pt-2",
      children: footer
    })]
  });
};

Object.assign({
  cardProps: {
    type: Object,
    default: () => {}
  },
  cardHeaderProps: {
    type: Object,
    default: () => {}
  },
  cardFooterProps: {
    type: Object,
    default: () => {}
  },
  cardBodyProps: {
    type: Object,
    default: () => {}
  }
}, CardBase.prototype.props);

/**
 *
 * @param {ImsCardProps} props
 * @returns
 */

const ImsCard = ({
  children,
  cardProps,
  cardHeaderProps,
  cardFooterProps,
  cardBodyProps
}) => {
  return /*#__PURE__*/jsxs(CardBase, _extends({}, cardProps, {
    children: [(cardHeaderProps == null ? void 0 : cardHeaderProps.children) && /*#__PURE__*/jsx(CardHeaderBase, _extends({}, cardHeaderProps, {
      children: cardHeaderProps == null ? void 0 : cardHeaderProps.children
    })), /*#__PURE__*/jsx(CardBodyBase, _extends({}, cardBodyProps, {
      children: children
    })), (cardFooterProps == null ? void 0 : cardFooterProps.children) && /*#__PURE__*/jsx(CardFooterBase, _extends({}, cardFooterProps, {
      children: cardFooterProps == null ? void 0 : cardFooterProps.children
    }))]
  }));
};
ImsCard.propTypes = _extends({}, CardBase.propTypes && CardBase.propTypes, {
  cardProps: PropTypes.object,
  cardHeaderProps: PropTypes.object,
  cardFooterProps: PropTypes.object,
  cardBodyProps: PropTypes.object
});

const PanelWindow = ({
  children,
  tabId
}) => {
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsx(TabPane, {
      tabId: tabId,
      children: children
    })
  });
};

const _excluded$4 = ["children", "onClick", "active", "index", "label"];
const PanelTab = _ref => {
  let {
      children,
      onClick,
      active,
      index
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsx(NavItemBase, _extends({}, props, {
      children: /*#__PURE__*/jsx(NavLinkBase, _extends({
        "data-toggle": "tab",
        href: "#",
        className: classNames("nav-link", {
          " active": active
        }),
        onClick: onClick,
        id: `ims-tab-${index}`,
        "aria-controls": `ims-tabpanel-${index}`
      }, props, {
        children: children
      }))
    }))
  });
};

const _excluded$3 = ["children", "activeTab", "variant"];
const PanelTabs = _ref => {
  let {
      children,
      activeTab = 0,
      variant
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  const [value, setValue] = React.useState(activeTab);
  const handleChange = (e, index) => {
    setValue(index);
  };
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsxs("div", {
      className: "panel-tabs",
      children: [/*#__PURE__*/jsx(NavBase, {
        tabs: true,
        variant: variant && variant,
        children: /*#__PURE__*/jsx("div", {
          className: "d-flex flex-fill gx-0 gy-3",
          children: React.Children.map(children, (child, index) => {
            if (child.type === PanelTab) return /*#__PURE__*/React.cloneElement(child, _extends({
              onClick: e => handleChange(e, index),
              active: index === value,
              index: index
            }, props));
          })
        })
      }), /*#__PURE__*/jsx(TabContentBase, _extends({
        activeTab: value,
        className: "panel-windows"
      }, props, {
        children: React.Children.map(children, (child, index) => {
          if (child.type === PanelWindow) return /*#__PURE__*/React.cloneElement(child, _extends({}, props));
        })
      }))]
    })
  });
};

function ImsCarousel({
  children,
  slidesPerView = 3,
  spaceBetween = 30,
  navigation = false
}) {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  React.useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.params.slidesPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3;
        swiperRef.current.swiper.update();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return /*#__PURE__*/jsxs(React.Fragment, {
    children: [navigation && /*#__PURE__*/jsxs("div", {
      className: "my-2 d-flex justify-content-end align-items-center",
      children: [/*#__PURE__*/jsx(Button, {
        outline: true,
        className: "border-0",
        onClick: handlePrev,
        children: /*#__PURE__*/jsx("i", {
          class: "fa-solid fa-angle-left p-0"
        })
      }), /*#__PURE__*/jsx(Button, {
        outline: true,
        className: "border-0",
        onClick: handleNext,
        children: /*#__PURE__*/jsx("i", {
          class: "fa-solid fa-angle-right p-0"
        })
      })]
    }), /*#__PURE__*/jsx(Swiper, {
      ref: swiperRef,
      slidesPerView: window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : slidesPerView,
      spaceBetween: spaceBetween,
      grabCursor: true,
      mousewheel: true,
      navigation: true,
      modules: [Mousewheel, Navigation],
      className: "ims-swiper-carousel",
      children: React.Children.map(children, child => {
        if (child) {
          return /*#__PURE__*/jsx(SwiperSlide, {
            children: child
          });
        } else {
          // Return null if the condition is not met
          return null;
        }
      })
    })]
  });
}

const _excluded$2 = ["percentage", "customPercentage"];
function RadialProgressBar(_ref) {
  let {
      percentage = 0,
      customPercentage = 0.75
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  let text = props.text || `${percentage}%`;
  let options = _extends({
    pathColor: "blue",
    rotation: 0.63,
    strokeLinecap: "butt",
    textSize: "16px"
  }, props.options);
  return /*#__PURE__*/jsx("div", {
    className: "radial-progress-bar",
    children: /*#__PURE__*/jsx(CircularProgressbar, {
      value: percentage * customPercentage,
      text: text,
      styles: buildStyles(options)
    })
  });
}
RadialProgressBar.propTypes = _extends({}, ProgressBase.propTypes && ProgressBase.propTypes);

function useDrawerStore(config) {
  const [openDrawers, setOpenDrawers] = useState([]);
  function toggle(drawerId) {
    setOpenDrawers(ids => {
      if (ids.includes(drawerId)) return ids.filter(id => id !== drawerId);else return [...ids, drawerId];
    });
  }
  function isOpen(drawerId) {
    return openDrawers.includes(drawerId);
  }
  //close function for the top most drawer
  function closeDrawer(drawerId) {
    setOpenDrawers(ids => {
      if (ids.includes(drawerId)) return ids.filter(id => id !== drawerId);else return ids;
    });
  }
  //function to only open drawer
  function openDrawer(drawerId) {
    setOpenDrawers(ids => {
      if (ids.includes(drawerId)) return ids;else return [...ids, drawerId];
    });
  }
  //function to close all drawers
  function closeAllDrawers() {
    setOpenDrawers([]);
  }
  return {
    isOpen,
    toggle,
    openDrawer,
    closeDrawer,
    closeAllDrawers
  };
}

const _excluded$1 = ["children"];
const DrawerContext = /*#__PURE__*/React.createContext();
const DrawerContextProvider = _ref => {
  let {
      children
    } = _ref;
    _objectWithoutPropertiesLoose(_ref, _excluded$1);
  let _useDocumentStore = useDrawerStore(),
    store = _extends({}, (_objectDestructuringEmpty(_useDocumentStore), _useDocumentStore));
  return /*#__PURE__*/jsx(DrawerContext.Provider, {
    value: _extends({}, store),
    children: children
  });
};

function useDrawer() {
  const _useContext = useContext(DrawerContext),
    store = _extends({}, (_objectDestructuringEmpty(_useContext), _useContext));
  return _extends({}, store);
}

const _excluded = ["drawerId", "children", "onClick"];
const DrawerOpener = _ref => {
  let {
      drawerId = "",
      children,
      onClick = () => {}
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  const {
    openDrawer
  } = useDrawer();
  return /*#__PURE__*/jsx("span", _extends({
    onClick: e => {
      openDrawer(drawerId);
      onClick(e);
    }
  }, rest, {
    children: children
  }));
};

function useInternalState() {
  const {
    isOpen,
    toggle,
    closeDrawer,
    openDrawer,
    closeAllDrawers
  } = useDrawer();
  //get window inner width form size prop
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function _getSize(size) {
    if (windowWidth > 1300) return `${size}vw`;
    if (windowWidth > 1200) return `50vw`;
    if (windowWidth > 992) return `60vw`;
    return `100vw`;
  }
  return {
    isOpen,
    toggle,
    _getSize,
    closeDrawer,
    openDrawer,
    closeAllDrawers
  };
}
const DrawerRight = ({
  drawerId: _drawerId = "",
  children,
  size: _size = 40,
  toolbar: _toolbar = null,
  containerRef,
  onDrawerClose: _onDrawerClose = () => {},
  onScroll: _onScroll = () => {}
}) => {
  const {
    isOpen,
    _getSize,
    closeDrawer
  } = useInternalState();
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsx(Drawer, {
      lockBackgroundScroll: true,
      open: isOpen(_drawerId),
      onClose: () => {
        closeDrawer(_drawerId);
        _onDrawerClose();
      },
      direction: "right",
      size: _getSize(_size),
      zIndex: 1051,
      children: /*#__PURE__*/jsxs("div", {
        ref: containerRef,
        onScroll: _onScroll,
        className: "p-4 h-100 overflow-y-scroll scrollbar-primary",
        children: [/*#__PURE__*/jsx(RowBase, {
          children: /*#__PURE__*/jsx(ColBase, {
            md: "12",
            children: /*#__PURE__*/jsxs("div", {
              className: "d-flex flex-row-reverse align-items-center",
              children: [/*#__PURE__*/jsx(ButtonBase, {
                className: "border-0 pull-right",
                onClick: () => {
                  closeDrawer(_drawerId);
                  _onDrawerClose();
                },
                color: "danger",
                outline: true,
                size: "sm",
                children: /*#__PURE__*/jsx("i", {
                  className: "ims-icons icon-icon-cross-24"
                })
              }), _toolbar]
            })
          })
        }), children]
      })
    })
  });
};

const useAPIError = () => {
  function isAPIError(err) {
    return err instanceof AxiosError;
  }
  function hanldeAPIError(err) {
    /** we only allowd netword of api realted error here */
    if (err instanceof AxiosError) {
      var _err$response, _err$response2, _err$response3;
      let statusCode = (_err$response = err.response) == null ? void 0 : _err$response.status;
      /** here we have set up the priority levels of messages */
      let message = ((_err$response2 = err.response) == null || (_err$response2 = _err$response2.data.details) == null ? void 0 : _err$response2.description) || ((_err$response3 = err.response) == null ? void 0 : _err$response3.data.message) || err.message;
      /** 4xx errors need to be shown to users. */
      if (statusCode >= 400 && statusCode <= 499) {
        return toast.error(message);
      }
      if (statusCode >= 500 && statusCode <= 599) {
        if (process.env.NODE_ENV === "development") {
          return toast.error(message);
        } else {
          return toast.error("Unexpected server error occured. Please contact support for help at support@imssystems.tech");
        }
      }
    }
    /**
     * if code reaches here it means an UI or frontend related error.
     * we only show toast in development mode for better development experience.
     */
    if (process.env.NODE_ENV === "development") {
      return toast.error("Unknown error detected in API Error handler: ", err.message);
    }
  }
  return {
    isAPIError,
    hanldeAPIError
  };
};

function useError() {
  const {
    isAPIError,
    hanldeAPIError
  } = useAPIError();
  function handleError(error) {
    if (isAPIError(error)) {
      return hanldeAPIError(error);
    }
  }
  return {
    handleError
  };
}

function useQuery(initial) {
  const initialQueryState = {
    required: _buildDefault(initial).required,
    filter: _buildDefault(initial).filter,
    search: _buildDefault(initial).search,
    pagination: _buildDefault(initial).pagination
  };
  const initialToolState = {
    filter: initial && initial.filter || {},
    required: initial && initial.required || {},
    search: "",
    pagination: initial && initial.pagination || {
      page: 1,
      size: 10
    }
  };
  let [query, setQuery] = useState(initialQueryState);
  let [toolState, setToolState] = useState(initialQueryState);
  function fullReset() {
    setQuery(initialQueryState);
    setToolState(initialToolState);
  }
  function _buildDefault(initial) {
    return {
      required: initial && initial.required ? objectToQuery(initial.required.value) : "",
      filter: initial && initial.filter ? objectToQuery(initial.filter.value) : "",
      search: initial && initial.search ? objectToQuery(initial.search.value) : "",
      pagination: initial && initial.pagination ? objectToQuery(initial.pagination.value) : "page=1"
    };
  }
  function isObject(object) {
    return object !== null && typeof object === "object";
  }
  function objectToQuery(object) {
    if (!object) return "";
    const queryBucket = [];
    function dig(obj, build = "") {
      if (!isObject(obj)) return queryBucket.push(build + `=${encodeURIComponent(obj)}`);
      const keys = Object.keys(obj);
      for (let key of keys) {
        if (isObject(obj)) {
          let attach = !build ? `${key}` : !Array.isArray(obj) ? `[${key}]` : `[]`;
          dig(obj[key], build + attach);
        }
      }
      return obj;
    }
    dig(object);
    return queryBucket.join("&");
  }
  let formatString = str => str ? "&" + str : str;
  function getQuery() {
    let processedString = "";
    let keys = Object.keys(query);
    for (let key of keys) {
      processedString = processedString ? processedString + formatString(query[key]) : query[key];
    }
    return processedString;
  }
  function handleRequired(requiredQuery) {
    setQuery(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return _extends({}, JSON.parse(JSON.stringify(prevState)), {
        required: objectToQuery(requiredQuery.value),
        pagination: "page=1"
      });
    });
    _updateRequired(requiredQuery);
    _updatePagination({
      page: 1,
      size: 10
    });
  }
  function handleFilter(filterQuery) {
    setQuery(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return _extends({}, JSON.parse(JSON.stringify(prevState)), {
        filter: objectToQuery(filterQuery.value),
        pagination: "page=1"
      });
    });
    _updateFilter(filterQuery);
    _updatePagination({
      page: 1,
      size: 10
    });
  }
  function handlePagination(page = 1, size = 10) {
    setQuery(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return _extends({}, JSON.parse(JSON.stringify(prevState)), {
        pagination: objectToQuery({
          page,
          size
        })
      });
    });
    _updatePagination({
      page,
      size
    });
  }
  function handleSearch(searchQuery) {
    setQuery(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return _extends({}, JSON.parse(JSON.stringify(prevState)), {
        search: objectToQuery(searchQuery.value),
        pagination: "page=1"
      });
    });
    _updatePagination({
      page: 1,
      size: 10
    });
  }
  function _updatePagination(pagination) {
    setToolState(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return _extends({}, JSON.parse(JSON.stringify(prevState)), {
        pagination
      });
    });
  }
  function _updateFilter(filter) {
    setToolState(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return _extends({}, JSON.parse(JSON.stringify(prevState)), {
        filter
      });
    });
  }
  function _updateRequired(required) {
    setToolState(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return _extends({}, JSON.parse(JSON.stringify(prevState)), {
        required
      });
    });
  }
  return {
    query,
    toolState,
    fullReset,
    getQuery,
    handleFilter,
    handlePagination,
    handleSearch,
    handleRequired
  };
}

const byString = function byString(object, accessString) {
  accessString = accessString.replace(/\[(\w+)\]/g, ".$1");
  accessString = accessString.replace(/^\./, "");
  let accessKeys = accessString.split(".");
  for (let i = 0, n = accessKeys.length; i < n; ++i) {
    let key = accessKeys[i];
    if (key in object) {
      object = object[key];
    } else {
      return;
    }
  }
  return object;
};

Object.byString = byString;
const useForm = (initdataModel, schema) => {
  const [dataModel, setDataModel] = useState(initdataModel);
  const [validationErrors, setValidationErrors] = useState({});
  const [isBusy, setIsBusy] = useState(false);
  const validate = async () => {
    const options = {
      abortEarly: false
    };
    const errors = {};
    try {
      await schema.validate(dataModel, options);
      return null;
    } catch (err) {
      err.inner.forEach(item => {
        errors[item.path] = item.message;
      });
      return errors;
    }
  };
  const validateProperty = async (field, value) => {
    const errors = _extends({}, validationErrors);
    try {
      const objSchema = yup.reach(schema, field);
      await objSchema.validate(value);
      /**
       * if reached this block after promise it means validation success.
       * remove the errors if there is any regarding this field.
       */
      delete errors[field];
    } catch (err) {
      /**
       * invalid input detected. update with proper error message on the
       * respective field.
       */
      errors[field] = err.message;
    } finally {
      /**
       * finally we are just setting the erros to state.
       */
      setValidationErrors(errors);
    }
  };
  const handleSubmit = async (e, doSubmit, reset = true, options = {}) => {
    e.preventDefault();
    const errors = await validate();
    if (errors) return setValidationErrors(errors);
    // Form submission logic here ....
    function submission() {
      return new Promise(async (resolve, reject) => {
        try {
          await doSubmit(dataModel, e);
          if (reset) resetForm();
          return resolve();
        } catch (err) {
          return reject(err);
        }
      });
    }
    try {
      setIsBusy(true);
      await submission();
    } catch (err) {
      console.log(err);
    }
    setIsBusy(false);
  };
  const handleChange = ({
    field,
    value
  }) => {
    const data = _extends({}, dataModel);
    data[field] = value;
    setDataModel(data);
    validateProperty(field, value);
  };
  const handleFileChange = (files, name) => {
    const data = _extends({}, dataModel);
    data[name] = files;
    setDataModel(data);
    validateProperty(name, files);
  };
  const resetForm = () => {
    setDataModel(initdataModel);
    setValidationErrors({});
  };
  const _isObject = object => object !== null && typeof object === "object";
  const _deepEqual = (referenceObject, testObject) => {
    const referenceKeys = Object.keys(referenceObject);
    const testKeys = Object.keys(testObject);
    if (referenceKeys.length !== testKeys.length) return false;
    for (const key of referenceKeys) {
      const referenceValue = referenceObject[key];
      const testValue = testObject[key];
      const hasProperties = _isObject(referenceValue);
      if (!hasProperties && referenceValue !== testValue) return false;
      if (hasProperties && !_deepEqual(referenceValue, testValue)) return false;
    }
    return true;
  };
  const hasUnsavedData = () => !_deepEqual(initdataModel, dataModel);
  const isFormValid = () => Object.keys(validationErrors).length === 0;
  useEffect(() => {
    console.log("datamodel", dataModel);
    console.log("validation error:", validationErrors);
  }, [dataModel, validationErrors]);
  /** validation runner is required the first time the form renders. */
  useEffect(() => {
    // (async function () {
    //   const errors = await validate();
    //   if (errors) return setValidationErrors(errors);
    // })();
  }, []);
  return {
    dataModel,
    validationErrors,
    isBusy,
    handleChange,
    handleSubmit,
    isFormValid,
    resetForm,
    hasUnsavedData,
    handleFileChange
  };
};

const useDualStateController = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return {
    isOpen,
    toggle
  };
};

const defaultPaginationState = {
  currentPage: 1,
  hasNextPage: false,
  hasPrevPage: false,
  nextPage: null,
  prevPage: null,
  size: 10,
  totalPages: 0,
  totalResults: 0
};
const usePaginationState = () => {
  const [pagination, setPagination] = useState(defaultPaginationState);
  function updatePaginaion(pagination = defaultPaginationState) {
    setPagination(pagination);
  }
  return {
    pagination,
    updatePaginaion
  };
};

const useProcessing = initializers => {
  let initState = {};
  initializers.forEach(process => {
    initState[process.action] = {
      status: process.status,
      id: null
    };
  });
  let [processing, setProcessing] = useState(initState);
  let dispatch = state => {
    setProcessing(currentProcesses => {
      let key = Object.keys(state)[0];
      let value = Object.values(state)[0];
      let updatedProcesses = _extends({}, currentProcesses);
      updatedProcesses[key] = value;
      return updatedProcesses;
    });
  };
  return {
    processing,
    dispatch
  };
};

const SUCCESS_TIMEOUT = 2500;
const useClipboard = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const contentElementReference = useRef(null);
  async function copyFormatedToClipboard() {
    if (contentElementReference.current) {
      /** create a range to select contents that will be copied. */
      // const range = document.createRange();
      // range.selectNodeContents(contentElementReference.current);
      /** copy the contents to clipboard. */
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.write([new ClipboardItem({
            "text/html": new Blob([contentElementReference.current.innerHTML], {
              type: "text/html"
            })
          })]);
          setCopySuccess(true);
          console.log("Contentns copied.");
        } catch (err) {
          console.log("Error copying to clipboard.");
          console.log(err);
        }
        setTimeout(() => setCopySuccess(false), SUCCESS_TIMEOUT);
      }
    }
  }
  async function copyPlainTextToClipBoard(value, cb = () => {}) {
    if (navigator.clipboard) {
      setCopySuccess(true);
      await navigator.clipboard.writeText(value);
      setTimeout(() => setCopySuccess(false), SUCCESS_TIMEOUT);
    }
  }
  return {
    contentElementReference,
    copySuccess,
    copyFormatedToClipboard,
    copyPlainTextToClipBoard
  };
};

forms;

export { AccordionBase as Accordion, AccordionBodyBase as AccordionBody, AccordionHeaderBase as AccordionHeader, AccordionItemBase as AccordionItem, ActivityBase as Activity, Table as AdvancedExpandedTable, Table$1 as AdvancedTable, AlertBase as Alert, BadgeBase as Badge, BreadcrumbBase as Breadcrumb, BreadcrumbItemBase as BreadcrumbItem, ButtonBase as Button, ButtonDropdownBase as ButtonDropdown, ButtonGroupBase as ButtonGroup, ButtonToggleBase as ButtonToggle, ButtonToolbarBase as ButtonToolbar, CardBase as Card, CardBodyBase as CardBody, CardColumnsBase as CardColumns, CardDeckBase as CardDeck, CardFooterBase as CardFooter, CardGroupBase as CardGroup, CardHeaderBase as CardHeader, CardImgBase as CardImg, CardImgOverlayBase as CardImgOverlay, CardLinkBase as CardLink, CardSubtitleBase as CardSubtitle, CardTextBase as CardText, CardTitleBase as CardTitle, CarouselBase as Carousel, CarouselCaptionBase as CarouselCaption, CarouselControlBase as CarouselControl, CarouselIndicatorsBase as CarouselIndicators, CarouselItemBase as CarouselItem, CloseButtonBase as CloseButton, ColBase as Col, CollapseBase as Collapse, ContainerBase as Container, CreatableSelectBase as CreatableSelect, DrawerContextProvider, DrawerOpener, DrawerRight, DropdownBase as Dropdown, DropdownItemBase as DropdownItem, DropdownMenuBase as DropdownMenu, DropdownToogleBase as DropdownToggle, FadeBase as Fade, FileDropZone as FileDropzone, FormBase as Form, FormFeedbackBase as FormFeedback, FormGroupBase as FormGroup, FormTextBase as FormText, ImsCard, ImsCarousel, ImsInputCheck, ImsInputDate, ImsInputDropZone, ImsInputRadio, ImsInputSelect, ImsInputSelectWithIcon, ImsInputText, ImsInputTextWithIcon, ImsInputTime, InputBase$1 as Input, InputGroupBase$1 as InputGroup, InputGroupTextBase$1 as InputGroupText, LabelBase as Label, ListBase as List, ListGroupBase as ListGroup, ListGroupItemBase as ListGroupItem, ListGroupItemHeadingBase as ListGroupItemHeading, ListGroupItemTextBase as ListGroupItemText, ListInlineItemBase as ListInlineItem, MediaBase as Media, ModalBase as Modal, ModalBodyBase as ModalBody, ModalFooterBase as ModalFooter, ModalHeaderBase as ModalHeader, NavBase as Nav, NavItemBase as NavItem, NavLinkBase as NavLink, NavBarBase as Navbar, NavbarBrandBase as NavbarBrand, NavbarTextBase as NavbarText, NavbarTogglerBase as NavbarToggler, OffcanvasBase as Offcanvas, OffcanvasBodyBase as OffcanvasBody, OffcanvasHeaderBase as OffcanvasHeader, PaginationBase as Pagination, PaginationItemBase as PaginationItem, PaginationLinkBase as PaginationLink, PanelTab, PanelTabs, PanelWindow, PlaceholderBase as Placeholder, PlaceholderButtonBase as PlaceholderButton, PopoverBase as Popover, PopoverBodyBase as PopoverBody, PopoverHeaderBase as PopoverHeader, PopperContentBase as PopperContent, PopperTargetHelperBase as PopperTargetHelper, ProgressBase as Progress, RadialProgressBar, ImsRadioCheckbox as RadioCheckbox, RowBase as Row, ReactSearchBase as SearchSelect, ReactSelectBase as Select, ImsSimpleTable as SimpleTable, SpinnerBase as Spinner, TabContentBase as TabContent, TabPaneBase as TabPane, TableBase as Table, InputBase as TextInput, ToastBase as Toast, ToastBodyBase as ToastBody, ToastHeaderBase as ToastHeader, UncontrolledTooltipBase as Tooltip, UncontrolledAccordionBase as UncontrolledAccordion, UncontrolledAlertBase as UncontrolledAlert, UncontrolledButtonDropdownBase as UncontrolledButtonDropdown, UncontrolledCarouselBase as UncontrolledCarousel, UncontrolledCollapseBase as UncontrolledCollapse, UncontrolledDropdownBase as UncontrolledDropdown, UncontrolledPopoverBase as UncontrolledPopover, useError as useAPIError, useClipboard, useDrawer, useDualStateController, useForm, usePaginationState, useProcessing, useQuery };
//# sourceMappingURL=index.modern.mjs.map
