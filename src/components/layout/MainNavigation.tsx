import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  NAVIGATION_STRUCTURE,
  type NavigationItem,
} from "../../types/navigation";

interface MainNavigationProps {
  onNavigate: (path: string) => void;
  currentPath?: string;
}

export function MainNavigation({
  onNavigate,
  currentPath,
}: MainNavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);
  const subMenuTimeoutRef = useRef<number | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleItemClick = (item: NavigationItem) => {
    if (item.path) {
      onNavigate(item.path);
      setOpenDropdown(null);
      setHoveredSubMenu(null);
      setMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Manage body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobile, mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && mobileMenuOpen) {
        const target = event.target as Element;
        const nav = document.querySelector('nav');
        if (nav && !nav.contains(target)) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, mobileMenuOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
    if (event.key === 'Escape' && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleMouseEnter = (id: string) => {
    if (isMobile) return; // Disable hover on mobile
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    if (isMobile) return; // Disable hover on mobile
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setHoveredSubMenu(null);
    }, 500);
  };

  const handleSubMenuEnter = (id: string) => {
    if (isMobile) return; // Disable hover on mobile
    if (subMenuTimeoutRef.current) {
      clearTimeout(subMenuTimeoutRef.current);
    }
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredSubMenu(id);
  };

  const handleSubMenuLeave = () => {
    if (isMobile) return; // Disable hover on mobile
    subMenuTimeoutRef.current = setTimeout(() => {
      setHoveredSubMenu(null);
    }, 500);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (subMenuTimeoutRef.current) {
        clearTimeout(subMenuTimeoutRef.current);
      }
    };
  }, []);

  const renderDropdownItems = (items: NavigationItem[]) => {
    return (
      <div
        className={`${
          isMobile 
            ? 'relative w-full bg-gray-50 border-t border-gray-200'
            : 'absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px]'
        }`}
        onMouseEnter={() => {
          if (isMobile) return;
          if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
          }
          if (subMenuTimeoutRef.current) {
            clearTimeout(subMenuTimeoutRef.current);
          }
        }}
        onMouseLeave={isMobile ? undefined : handleMouseLeave}
      >
        {items.map((item) => {
          const isActive = currentPath === item.path;
          const hasChildren = item.children && item.children.length > 0;

          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => {
                if (isMobile) return;
                if (hasChildren) {
                  handleSubMenuEnter(item.id);
                } else {
                  // Clear submenu when hovering over non-submenu items
                  if (subMenuTimeoutRef.current) {
                    clearTimeout(subMenuTimeoutRef.current);
                  }
                  setHoveredSubMenu(null);
                }
              }}
              onMouseLeave={() => {
                if (isMobile) return;
                if (hasChildren) {
                  handleSubMenuLeave();
                }
              }}
            >
              <button
                onClick={() => {
                  if (hasChildren && isMobile) {
                    // On mobile, first click expands submenu
                    setHoveredSubMenu(hoveredSubMenu === item.id ? null : item.id);
                  } else {
                    handleItemClick(item);
                  }
                }}
                className={`nav-button w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                  isActive
                    ? "bg-knbs-500 text-white"
                    : "text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                } ${isMobile ? 'first:rounded-none last:rounded-none' : 'first:rounded-t-lg last:rounded-b-lg'}`}
              >
                {item.label}
                {hasChildren && (
                  <ChevronDown
                    size={14}
                    className={`inline-block ml-2 transform transition-transform ${
                      isMobile 
                        ? (hoveredSubMenu === item.id ? 'rotate-180' : '')
                        : '-rotate-90'
                    }`}
                  />
                )}
              </button>

              {hasChildren && hoveredSubMenu === item.id && (
                <div
                  className={`${
                    isMobile 
                      ? 'w-full bg-gray-100 border-t border-gray-200'
                      : 'absolute left-full top-0 -ml-1 pl-2 pt-1 pb-1'
                  }`}
                  onMouseEnter={() => {
                    if (isMobile) return;
                    handleSubMenuEnter(item.id);
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    if (subMenuTimeoutRef.current) {
                      clearTimeout(subMenuTimeoutRef.current);
                    }
                  }}
                  onMouseLeave={isMobile ? undefined : handleSubMenuLeave}
                >
                  <div className={`${
                    isMobile 
                      ? 'bg-gray-100'
                      : 'bg-white border border-gray-200 rounded-lg shadow-lg min-w-[220px]'
                  }`}>
                    {item.children!.map((subItem) => {
                      const isSubActive = currentPath === subItem.path;
                      return (
                        <button
                          key={subItem.id}
                          onClick={() => handleItemClick(subItem)}
                          className={`nav-button w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                            isSubActive
                              ? "bg-knbs-500 text-white"
                              : "text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                          } ${isMobile ? 'px-6' : 'first:rounded-t-lg last:rounded-b-lg'}`}
                        >
                          {subItem.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        {/* Mobile menu toggle */}
        {isMobile && (
          <div className="flex items-center justify-between py-3">
            <span className="text-sm font-medium text-knbs-700">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onKeyDown={(e) => handleKeyDown(e, () => setMobileMenuOpen(!mobileMenuOpen))}
              className="nav-button p-2 text-knbs-700 hover:bg-knbs-50 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        )}
        
        {/* Desktop navigation */}
        <div className={`${
          isMobile 
            ? (mobileMenuOpen ? 'block nav-dropdown' : 'hidden') + ' pb-4'
            : 'flex items-center space-x-0'
        }`}>
          <div className={`${
            isMobile 
              ? 'flex flex-col space-y-1'
              : 'flex items-center space-x-1'
          }`}>
            {NAVIGATION_STRUCTURE.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openDropdown === item.id;

              return (
                <div
                  key={item.id}
                  className={`relative ${
                    isMobile ? 'w-full' : ''
                  }`}
                  onMouseEnter={() => {
                    if (hasChildren && !isMobile) {
                      handleMouseEnter(item.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasChildren && !isMobile) {
                      handleMouseLeave();
                    }
                  }}
                >
                  <button
                    onClick={() => {
                      if (hasChildren) {
                        toggleDropdown(item.id);
                      } else if (item.path) {
                        onNavigate(item.path);
                      }
                    }}
                    className={`nav-button flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                      isMobile 
                        ? 'w-full rounded-lg'
                        : 'rounded-lg'
                    } ${
                      // Check if current item is active (for items with direct paths) or if any child path matches
                      (item.path && currentPath === item.path) ||
                      (hasChildren && currentPath?.startsWith(`/${item.id}/`))
                        ? "bg-knbs-500 text-white"
                        : "text-knbs-700 hover:bg-knbs-50 hover:text-knbs-800 active:bg-knbs-100"
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform duration-150 ${
                          isOpen ? "rotate-180" : ""
                        } ${isMobile ? 'ml-2' : 'ml-2'}`}
                      />
                    )}
                  </button>

                  {hasChildren && isOpen && (
                    <div className={`${
                      isMobile 
                        ? 'mt-2 w-full'
                        : 'relative'
                    }`}>
                      {renderDropdownItems(item.children!)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
