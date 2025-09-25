'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { useBeauty } from '@/context/BeautyContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import * as z from 'zod';
import { toast } from 'sonner';

const registerSchema = z
  .object({
    name: z.string().min(2, 'Full name must be at least 2 characters.'),
    email: z.string().email('Enter a valid email address.'),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string(),
    agreedToTerms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the Terms & Privacy Policy.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  });

type RegisterSchema = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { dispatch } = useBeauty();
  const router = useRouter();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreedToTerms: false,
    },
  });

  const onSubmit = (data: RegisterSchema) => {
    const user = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      avatar: '/placeholder-avatar.jpg',
    };

    dispatch({ type: 'LOGIN', payload: user });

    // ✅ show toast
    toast.success('Account created successfully 🎉', {
      description: `Welcome, ${data.name}!`,
    });

    // small delay so toast is visible before redirect
    setTimeout(() => router.push('/login'), 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center space-y-3 mb-8">
          <div className="mx-auto w-14 h-14 gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <Sparkles className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-playfair font-bold tracking-tight">
            Create Your Lothera Account
          </h1>
          <p className="text-base text-muted-foreground">
            Start your luxury skincare journey today ✨
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        placeholder="Jane Doe"
                        className="pl-11"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="jane@example.com"
                        className="pl-11"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="********"
                        className="pl-11 pr-11"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <Eye className="w-5 h-5 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="********"
                        className="pl-11 pr-11"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <Eye className="w-5 h-5 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Terms */}
            <FormField
              control={form.control}
              name="agreedToTerms"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-2 text-sm">
                  <FormControl>
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2 mt-0.5"
                      checked={!!field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="leading-relaxed">
                    I agree to the{' '}
                    <Link
                      href="/terms"
                      className="text-primary hover:text-primary/80 underline underline-offset-2"
                    >
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/privacy"
                      className="text-primary hover:text-primary/80 underline underline-offset-2"
                    >
                      Privacy Policy
                    </Link>
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Register Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#e94057]/95 to-[#f27121]/95 text-primary-foreground shadow-glow rounded-xl"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting
                ? 'Creating Account...'
                : 'Create Account'}
            </Button>
          </form>
        </Form>

        {/* Divider */}
        <div className="my-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-3 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="w-full hover:bg-gradient-to-r hover:from-[#e94057]/95 hover:to-[#f27121]/95 hover:text-primary-foreground"
          >
            Google
          </Button>
          <Button
            variant="outline"
            className="w-full hover:bg-gradient-to-r hover:from-[#e94057]/95 hover:to-[#f27121]/95 hover:text-primary-foreground"
          >
            Twitter
          </Button>
        </div>

        {/* Sign In */}
        <div className="mt-6 text-center">
          <span className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-primary hover:text-primary/80 font-medium underline underline-offset-2"
            >
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
