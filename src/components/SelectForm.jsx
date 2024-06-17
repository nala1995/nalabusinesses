import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import meli from "../assets/imgs/mercadolibre.png"
import shopify from "../assets/imgs/Shopify.png"
import vtex from "../assets/imgs/vtex.svg"
import woocommerce from "../assets/imgs/woocommerce.svg"
import wix from "../assets/imgs/wix.svg"
import prestashop from "../assets/imgs/prestashop.svg"
import "../assets/main.css"
import "../assets/tailwind.css"


import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "../components/ui/use-toast";
import { Input } from "../components/ui/input";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
});

export function SelectForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>eCommerce migrations or implementations</FormLabel>
              <FormDescription>
                You can manage the platform you are interested in to {/* Ajustar Link si no usas Next.js */}
                {/* <Link href="/examples/forms">email settings</Link>. */}
                <a href="/Shopping">Implement</a>.
              </FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="backdrop-blur">
                  <SelectItem className="dwelling1" value="MercadoLibe@nalabusiness.com">
                    <div className="dwelling flex items-center justify-evenly space-x-2">
                      <img className="dwell h-6 w-6 ml-2 mr-22" alt="iconmeli" src={meli}/>
                      <div className="mr-16">Mercado Libre</div> 
                    </div>
                  </SelectItem>
                  <SelectItem className="dwelling1" value="Shopify@nalabusiness.com">
                    <div className="dwelling flex items-center justify-evenly space-x-2">
                      <img className="dwell h-6 w-6 ml-2 mr-22" alt="iconshopy" src={shopify}/>
                      <div className="mr-16">Shopify</div>
                    </div>
                  </SelectItem>
                  <SelectItem className="dwelling1" value="Vtex@nalabusiness.com">
                    <div className="dwelling flex items-center justify-evenly space-x-2">
                      <img className="dwell h-6 w-6 ml-2 mr-22" alt="iconvtex" src={vtex}/>
                      <div className="mr-16">Vtex</div>
                    </div>
                  </SelectItem>
                  <SelectItem className="dwelling1" value="Woocommerce@nalabusiness.com">
                    <div className="dwelling flex items-center justify-evenly space-x-2">
                      <img className="dwell h-6 w-6 ml-2 mr-22" alt="iconwoocomerce" src={woocommerce}/>
                      <div className="mr-16">Woocommerce</div>
                    </div>
                  </SelectItem>
                  <SelectItem className="dwelling1" value="Prestashop@nalabusiness.com">
                    <div className="dwelling flex items-center justify-evenly space-x-2">
                      <img className="dwell h-6 w-6 ml-2 mr-22" alt="iconpresta" src={prestashop}/>
                      <div className="mr-16">Prestashop</div>
                    </div>
                  </SelectItem>
                  <SelectItem className="dwelling1" value="Wix@nalabusiness.com">
                    <div className="dwelling flex items-center justify-evenly space-x-2">
                      <img className="h-6 w-6 ml-2 mr-22" alt="iconwix" src={wix}/>
                      <div className="mr-16">Wix</div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button className="shadow-teal-800" type="submit">Subscribe</Button>
      </div>
      </form>
    </Form>
  );
}
