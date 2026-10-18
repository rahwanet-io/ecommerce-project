"use client";

type AddToCartButtonProps = {
  available: boolean;
  onAdd: () => void;
};

export default function AddToCartButton({
  available,
  onAdd,
}: AddToCartButtonProps) {
  return (
    <button
      type="button"
      onClick={onAdd}
      disabled={!available}
    >
      {available ? "Add to cart" : "Currently unavailable"}
    </button>
  );
}