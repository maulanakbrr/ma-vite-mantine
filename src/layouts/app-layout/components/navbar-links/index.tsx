// AppShellNavbar.tsx
import { useState } from "react";
import { NavLink } from "react-router";
import { Box, NavLink as MantineNavLink, ScrollArea } from "@mantine/core";
import { IconArrowUp, IconArrowDown } from "@tabler/icons-react";
import { NAV_LINKS } from "./constants"; 

const AppNavbarLinks = () => {
  // Track which dropdown is open
  const [opened, setOpened] = useState<Record<string, boolean>>({});

  const toggle = (label: string) => {
    setOpened((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <ScrollArea>
      <Box p="md">
        {NAV_LINKS.map((item) => {
          const Icon = item.icon;
          const hasChildren = !!item.children;

          if (hasChildren) {
            // Render dropdown menu
            return (
              <MantineNavLink
                key={item.label}
                label={item.label}
                leftSection={<Icon size={18} />}
                rightSection={
                  opened[item.label] ? <IconArrowUp size={14} /> : <IconArrowDown size={14} />
                }
                onClick={() => toggle(item.label)}
                childrenOffset={24}
                opened={opened[item.label]}
              >
                {item.children!.map((child) => (
                  <MantineNavLink
                    key={child.label}
                    component={NavLink}
                    to={child.path}
                    label={child.label}
                  />
                ))}
              </MantineNavLink>
            );
          }

          // Render basic link
          return (
            <MantineNavLink
              key={item.label}
              component={NavLink}
              to={item.path!}
              label={item.label}
              leftSection={<Icon size={18} />}
            />
          );
        })}
      </Box>
    </ScrollArea>
  );
};

export default AppNavbarLinks;
