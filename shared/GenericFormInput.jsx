import { InputEnum } from "./api/enums";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import _ from "lodash";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { StyledSelect } from "./StyledSelect";
import CreatableSelectInput from "./StyledSelect/CreatableSelectInput";

const GenericFormInputs = ({
  form,
  type,
  label,
  required = false,
  placeholder,
  description,
  name,
  options,
  defaultValue,
  isMulti = false,
  isClearable = false,
}) => {
  switch (type) {
    case InputEnum.EMAIL:
    case InputEnum.PASSWORD:
    case InputEnum.TEXT:
    case InputEnum.URL:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-slate-50">
                  {_.capitalize(label)}
                  {/* {required && <sup className="text-red-500">*</sup>} */}
                </FormLabel>
                <div>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={placeholder}
                      type={_.lowerCase(type)}
                      className="!active:w-full !focus:w-full h-11 !w-full rounded-lg group-aria-[invalid='true']:border-red-500"
                    />
                  </FormControl>
                </div>
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    case InputEnum.SELECT:
      if (options) {
        return (
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
              const handleOnChange = field.onChange;
              return (
                <FormItem>
                  <FormLabel>{_.capitalize(label)}</FormLabel>
                  <div>
                    <StyledSelect
                      isClearable={isClearable}
                      defaultValue={defaultValue ?? field.value}
                      {...field}
                      options={options}
                      isMulti={isMulti}
                      onChange={handleOnChange}
                      className="w-full text-gray-700"
                    />
                  </div>
                  {description && (
                    <FormDescription>{description}</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        );
      }
      break;
    case InputEnum.IMAGE:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-slate-50">
                  {_.capitalize(label)}
                  {/* {required && <sup className="text-red-500">*</sup>} */}
                </FormLabel>
                <FormControl>{/* <Uploader /> */}</FormControl>
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    case InputEnum.TEXTAREA:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-slate-50">
                  {_.capitalize(label)}
                  {/* {required && <sup className="text-red-500">*</sup>} */}
                </FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder={placeholder} />
                </FormControl>
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    case InputEnum.HIDDEN:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input {...field} type="hidden" />
                </FormControl>
              </FormItem>
            );
          }}
        />
      );
    case InputEnum.CURRENCY:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-slate-50">
                  {_.capitalize(label)}
                  {required && <sup className="">*</sup>}
                </FormLabel>
                <div>
                  <FormControl>
                    <div>
                      <span className="absolute left-[0.88rem] top-2/4 -translate-y-2/4  text-gray-600">
                        $
                      </span>
                      <Input
                        {...field}
                        placeholder={placeholder}
                        type={"number"}
                        className="!active:w-full !focus:w-full h-11 !w-full rounded-lg pl-8 group-aria-[invalid='true']:border-red-500"
                      />
                    </div>
                  </FormControl>
                </div>
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    case InputEnum.NUMBER:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-slate-50">
                  {_.capitalize(label)}
                  {required && <sup className="">*</sup>}
                </FormLabel>
                <div>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={placeholder}
                      type={"number"}
                      className="!active:w-full !focus:w-full h-11 !w-full rounded-lg group-aria-[invalid='true']:border-red-500"
                    />
                  </FormControl>
                </div>
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    case InputEnum.DATE:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 dark:text-slate-50">
                {_.capitalize(label)}
                {required && <sup className="">*</sup>}
              </FormLabel>
              <div>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={placeholder}
                    type="date"
                    className="!active:w-full !focus:w-full h-11 !w-full rounded-lg group-aria-[invalid='true']:border-red-500"
                  />
                </FormControl>
              </div>
              {description && <FormDescription>{description}</FormDescription>}
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case InputEnum.CHECKBOX:
      return (
        <FormField
          control={form.control}
          name={name}
          render={() => (
            <FormItem>
              {label && <FormLabel className="text-base">{label}</FormLabel>}
              <div>
                {options &&
                  options.map((item) => (
                    <FormField
                      key={item.label}
                      control={form.control}
                      name={name}
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.label}
                            className="flex flex-row items-start space-x-2 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.value)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        item.value,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.value
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
              </div>
              {description && <FormDescription>{description}</FormDescription>}
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case InputEnum.SELECT_OR_TEXT:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>{_.capitalize(label)}</FormLabel>
                <div>
                  <CreatableSelectInput
                    form={form}
                    name={name}
                    options={options}
                    placeholder={placeholder}
                    isMulti={isMulti}
                    isClearable={isClearable}
                    type={type}
                    defaultValue={field.value}
                  />
                </div>
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    default:
      return null;
  }
};

export default GenericFormInputs;
