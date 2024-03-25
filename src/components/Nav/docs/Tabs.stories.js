import Nav from "../NavBase";
import NavItem from "../NavItemBase";
import NavLink from "../NavLinkBase";
export default {
  title: "components/Tabs",
  component: Nav,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
const Template = (args) => <Nav {...args} />;
export const PanTab = Template;
PanTab.args = {
  tabs: true,
  children: (
    <>
      <NavItem>
        <NavLink active href="#">
          Tab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Tab 2</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Tab 3</NavLink>
      </NavItem>
    </>
  ),
};

export { default as PanelTab } from "../Examples/TabsVariants";
export { default as TabPanel } from "../Examples/TabPanel";
