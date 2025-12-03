<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // যদি user লগ ইন না করা থাকে
        if (!auth()->check()) {
            return redirect()->route('login')->with('error', 'Please login first');
        }

        // যদি user এর role admin না হয়
        if (auth()->user()->role !== 'admin') {
            return redirect()->route('login')->with('error', 'Access denied! Admin only.');
        }

        // সব ঠিক থাকলে request চালিয়ে দাও
        return $next($request);
    }
}
