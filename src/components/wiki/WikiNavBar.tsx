import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Search,
  User,
  History,
  Settings,
  LogOut,
  Expand,
  Minimize,
  Sun,
  Moon,
} from "lucide-react";

interface WikiNavBarProps {
  onSearch?: (query: string) => void;
  username?: string;
  currentTab?: string;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  isDark?: boolean;
  onToggleTheme?: () => void;
}

const WikiNavBar = ({
  onSearch = () => {},
  username = "Guest User",
  currentTab = "read",
  isExpanded = false,
  onToggleExpand = () => {},
  isDark = false,
  onToggleTheme = () => {},
}: WikiNavBarProps) => {
  return (
    <header className="w-full h-[80px] bg-background border-b border-[#a7d7f9] fixed top-0 z-50">
      <div
        className={`${isExpanded ? "max-w-[1920px]" : "max-w-[1512px]"} mx-auto px-4 h-full transition-all duration-300`}
      >
        <nav className="flex items-center justify-between h-full">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-foreground">
              CatWiki
            </h1>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search CatWiki"
                className="w-full pl-10"
                onChange={(e) => onSearch(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleExpand}
              className="mr-2"
            >
              {isExpanded ? (
                <Minimize className="h-5 w-5" />
              ) : (
                <Expand className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleTheme}
              className="mr-2"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Tabs defaultValue={currentTab} className="w-auto">
              <TabsList>
                <TabsTrigger value="read">Read</TabsTrigger>
                <TabsTrigger value="edit">Edit</TabsTrigger>
                <TabsTrigger value="view-history">View History</TabsTrigger>
              </TabsList>
            </Tabs>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>{username}</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center">
                  <History className="mr-2 h-4 w-4" />
                  <span>Contributions</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default WikiNavBar;
