
import {
  BarChart3,
  CreditCard,
  DollarSign,
  Home,
  PieChart,
  PlusCircle,
  Settings,
  Target
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const menuItems = [
    { icon: Home, label: "Dashboard", link: "/" },
    { icon: CreditCard, label: "Transactions", link: "#" },
    { icon: Target, label: "Budgets", link: "#" },
    { icon: BarChart3, label: "Reports", link: "#" },
    { icon: Settings, label: "Settings", link: "#" },
  ];

  return (
    <Sidebar defaultCollapsed={false}>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <DollarSign className="text-primary h-6 w-6" />
          <h2 className="text-lg font-bold">ExpenseZen</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.link} className="flex items-center">
                      <item.icon className="h-4 w-4 mr-2" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="bg-primary/10 text-primary hover:bg-primary/20">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  <span>Add Transaction</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-4 py-2 mt-auto">
          <div className="flex items-center justify-between bg-primary/10 rounded-md p-3">
            <div>
              <p className="text-sm font-medium">Monthly Budget</p>
              <p className="text-xs text-muted-foreground">$2,271 / $4,000</p>
            </div>
            <PieChart className="h-5 w-5 text-primary" />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
