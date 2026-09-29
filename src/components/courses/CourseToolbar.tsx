"use client";

import LevelIcon from "@/components/shared/LevelIcon";
import {
  browseCategories,
  courseLevels,
  FEATURED_CATEGORY,
} from "@/data/courses";
import type {
  CourseFilters,
  CourseSort,
  PriceRange,
} from "@/utils/filterCourses";
import { cn } from "@/utils/cn";
import { Dropdown, type MenuProps } from "antd";
import { FiFilter } from "react-icons/fi";
import { LuListFilter, LuShapes } from "react-icons/lu";

const priceOptions: { key: PriceRange; label: string }[] = [
  { key: "any", label: "Any price" },
  { key: "under-25", label: "Under $25" },
  { key: "25-40", label: "$25 – $40" },
  { key: "40-plus", label: "Over $40" },
];

const sortOptions: { key: CourseSort; label: string }[] = [
  { key: "relevant", label: "Most relevant" },
  { key: "rating", label: "Highest rated" },
  { key: "price-asc", label: "Price: low to high" },
  { key: "price-desc", label: "Price: high to low" },
];

const pillClass =
  "inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-line bg-white px-4 text-sm text-ink transition-colors hover:border-brand/40";

/** Outline pill that opens a single-select menu. */
function FilterMenu({
  icon,
  label,
  active,
  value,
  options,
  onSelect,
}: {
  icon: React.ReactNode;
  label: string;
  /** Highlights the pill when a non-default value is chosen. */
  active: boolean;
  value: string;
  options: { key: string; label: string }[];
  onSelect: (key: string) => void;
}) {
  const menu: MenuProps = {
    selectable: true,
    selectedKeys: [value],
    items: options,
    onClick: ({ key }) => onSelect(key),
    className: "max-h-80 overflow-y-auto",
  };

  return (
    <Dropdown menu={menu} trigger={["click"]} placement="bottomLeft">
      <button
        type="button"
        className={cn(pillClass, active && "border-brand bg-brand/5 text-brand")}
      >
        {icon}
        {label}
      </button>
    </Dropdown>
  );
}

interface CourseToolbarProps {
  filters: CourseFilters;
  onChange: (patch: Partial<CourseFilters>) => void;
}

export default function CourseToolbar({
  filters,
  onChange,
}: CourseToolbarProps) {
  const priceLabel = priceOptions.find((o) => o.key === filters.price)!;
  const sortLabel = sortOptions.find((o) => o.key === filters.sort)!;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <FilterMenu
          icon={<FiFilter aria-hidden />}
          label={filters.price === "any" ? "Filter" : priceLabel.label}
          active={filters.price !== "any"}
          value={filters.price}
          options={priceOptions}
          onSelect={(key) => onChange({ price: key as PriceRange })}
        />
        <FilterMenu
          icon={<LevelIcon />}
          label={filters.level === "all" ? "Level" : filters.level}
          active={filters.level !== "all"}
          value={filters.level}
          options={[
            { key: "all", label: "All levels" },
            ...courseLevels.map((level) => ({ key: level, label: level })),
          ]}
          onSelect={(key) =>
            onChange({ level: key as CourseFilters["level"] })
          }
        />
        <FilterMenu
          icon={<LuShapes aria-hidden />}
          label={
            filters.category === FEATURED_CATEGORY
              ? "Category"
              : filters.category
          }
          active={filters.category !== FEATURED_CATEGORY}
          value={filters.category}
          options={browseCategories.map((c) => ({
            key: c,
            label: c === FEATURED_CATEGORY ? "All categories" : c,
          }))}
          onSelect={(key) => onChange({ category: key })}
        />
      </div>

      <FilterMenu
        icon={<LuListFilter aria-hidden />}
        label={sortLabel.label}
        active={false}
        value={filters.sort}
        options={sortOptions}
        onSelect={(key) => onChange({ sort: key as CourseSort })}
      />
    </div>
  );
}
