import { Tabs, TabsProps, Typography } from '@/components';
import { BaseComponentProps } from '@/models/BaseComponentProperties';

interface MainPageHeaderProps extends BaseComponentProps {
  title?: string;
  description?: string;
  headerActions?: React.ReactNode;
  content?: React.ReactNode;
  tabsConfig?: TabsProps;
}

export function MainPageHeader({
  title,
  description,
  headerActions,
  id,
  content,
  tabsConfig,
}: MainPageHeaderProps) {
  return (
    <div
      id={`${id}-main-page-header`}
      data-cy={`${id}-main-page-header`}
      className="w-full border-b border-secondary bg-fg-white"
    >
      {/* Title/Description Row */}
      <div className="flex min-h-16 items-center justify-between px-3xl pt-3xl">
        <div className="flex flex-col gap-sm">
          <Typography
            id={`${id}-title`}
            data-cy={`${id}-title`}
            variant="text-lg"
            textColor="secondary"
            weight="medium"
            className="leading-6"
          >
            {title}
          </Typography>
          <Typography
            id={`${id}-description`}
            data-cy={`${id}-description`}
            variant="text-sm"
            textColor="quaternary"
            weight="regular"
            className="leading-5"
          >
            {description}
          </Typography>
        </div>
        <div className="flex gap-xs">{headerActions}</div>
      </div>

      {/* Content Row (Filters/Search) */}
      <div className="px-3xl pt-6">{content}</div>

      {/* Tabs Row */}
      {tabsConfig && tabsConfig.items.length > 0 && (
        <div className="px-3xl pt-4">
          <Tabs {...tabsConfig} />
        </div>
      )}
    </div>
  );
}