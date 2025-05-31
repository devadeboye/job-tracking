export interface LargeScreenNavProps {
  className?: string;
}

export type SmallScreenNavProps = Pick<LargeScreenNavProps, "className">;