import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavDropdown } from "react-bootstrap";
const SidebarManage = (props) => {
  const { collapsed, toggleSidebar } = props;
  return (
    <>
      <Sidebar
        collapsed={collapsed}
        toggled={!collapsed}
        breakPoint="all"
        onBackdropClick={toggleSidebar}
        backgroundColor="rgb(249, 247, 247)"
        rootStyles={{
          color: "rgba(9, 9, 9, 0.7)",
          fontSize: "16px",
          fontWeight: "700",
          width: 'auto'
        }}
      >
        <Menu menuItemStyles={{
          label: {
            overflow: "visible",
            textOverflow: "unset",
          },
        }}>
          <SubMenu
            icon={
              <i
                className="fa-solid fa-users"
                style={{ color: "rgba(0, 176, 251, 0.7)", textOverflow: 'none' }}
              ></i>
            }
            label="Manage Users"
          >
            <MenuItem component={<NavLink to="/ManageUser" />}>
              CRUD Users
            </MenuItem>

          </SubMenu>
          <SubMenu
            icon={
              <i
                className="fa-solid fa-layer-group"
                style={{ color: "rgba(0, 176, 251, 0.7)" }}
              ></i>
            }
            label="Manage Product"
          >

            <MenuItem component={<Link to="/ManageProduct" />}>
              CRUD Product
            </MenuItem>
            <MenuItem component={<NavLink to="/ManageMarkdown" />}>
              Manage Markdown
            </MenuItem>
            <MenuItem component={<NavLink to="/Manage-order-product" />}>
              Manage Order
            </MenuItem>
          </SubMenu>

          <SubMenu
            icon={
              <i
                className="fa-solid fa-image"
                style={{ color: "rgba(0, 176, 251, 0.7)" }}
              ></i>
            }
            label="Manage Banner"
          >
            <MenuItem component={<Link to="/ManageBanner" />}>
              CRUD Banner
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};
export default SidebarManage;
