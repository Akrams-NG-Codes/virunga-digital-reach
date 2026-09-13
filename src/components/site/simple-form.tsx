import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type Field =
  | { name: string; label: string; type: "text" | "email" | "tel" | "date"; required?: boolean; autoComplete?: string }
  | { name: string; label: string; type: "textarea"; required?: boolean; rows?: number }
  | { name: string; label: string; type: "select"; required?: boolean; options: string[] }
  | { name: string; label: string; type: "checkbox"; required?: boolean }
  | { name: string; label: string; type: "file"; required?: boolean; accept?: string; hint?: string };

const inputClass =
  "mt-1 h-11 w-full rounded-md border border-input bg-card px-3 text-base text-foreground";

export function SimpleForm({
  fields,
  submitLabel,
  note,
  className,
}: {
  fields: Field[];
  submitLabel?: string;
  note?: string;
  className?: string;
}) {
  const t = useT();
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    toast(t.common.formNotConnectedTitle, { description: t.common.formNotConnectedBody });
    setSubmitting(false);
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)}>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `field-${field.name}`;
          const wide = field.type === "textarea" || field.type === "checkbox" || field.type === "file";
          return (
            <div key={field.name} className={wide ? "sm:col-span-2" : undefined}>
              {field.type === "checkbox" ? (
                <label className="flex items-start gap-3 text-sm leading-relaxed">
                  <input id={id} name={field.name} type="checkbox" required={field.required} className="mt-1 size-4" />
                  <span>{field.label}</span>
                </label>
              ) : (
                <>
                  <label htmlFor={id} className="text-sm font-medium">
                    {field.label}
                    {!field.required && (
                      <span className="ml-1 text-xs font-normal text-muted-foreground">
                        ({t.common.optional})
                      </span>
                    )}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={id}
                      name={field.name}
                      required={field.required}
                      rows={field.rows ?? 6}
                      className="mt-1 w-full rounded-md border border-input bg-card p-3 text-base text-foreground"
                    />
                  ) : field.type === "select" ? (
                    <select id={id} name={field.name} required={field.required} className={inputClass}>
                      <option value="">—</option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "file" ? (
                    <>
                      <input
                        id={id}
                        name={field.name}
                        type="file"
                        accept={field.accept}
                        required={field.required}
                        className="mt-1 w-full rounded-md border border-input bg-card p-2 text-sm"
                      />
                      {field.hint && <p className="mt-1 text-xs text-muted-foreground">{field.hint}</p>}
                    </>
                  ) : (
                    <input
                      id={id}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      autoComplete={"autoComplete" in field ? field.autoComplete : undefined}
                      className={inputClass}
                    />
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
      {note && <p className="text-xs text-muted-foreground">{note}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-12 items-center rounded-md bg-brand px-6 font-semibold text-brand-foreground hover:bg-brand-deep disabled:opacity-60"
      >
        {submitLabel ?? t.common.submit}
      </button>
    </form>
  );
}
